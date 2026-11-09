import test from 'node:test';
import assert from 'node:assert/strict';
import http from 'node:http';
import { gunzipSync } from 'node:zlib';
import express from 'express';
import compression from 'compression';
import { readFileSync } from 'node:fs';
import { clientFallback } from '../src/server/clientFallback.ts';
import { clientRoutes, isClientRoute } from '../src/server/clientRoutes.ts';
import { redirectCanonicalHost, redirectLegacyPage } from '../src/server/httpMiddleware.ts';

const payload = 'PthFndR response compression. '.repeat(200);
const app = express();
app.use(redirectCanonicalHost);
app.use(compression());
app.use((_req, res) => res.type('html').send(payload));

function request(port, host, encoding = 'identity', method = 'GET') {
  return new Promise((resolve, reject) => {
    const req = http.request({ hostname: '127.0.0.1', port, path: '/contact?for=Discover+Bootcamp&role=applicant', method, headers: { Host: host, 'Accept-Encoding': encoding } }, res => {
      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, body: Buffer.concat(chunks) }));
    });
    req.on('error', reject);
    req.end();
  });
}

test('canonical redirects and compression preserve requests and content', async () => {
  const server = app.listen(0, '127.0.0.1');
  await new Promise(resolve => server.once('listening', resolve));
  const port = server.address().port;
  try {
    for (const method of ['GET', 'POST']) {
      const result = await request(port, 'www.pthfndr.org', 'identity', method);
      assert.equal(result.status, 308);
      assert.equal(result.headers.location, 'https://pthfndr.org/contact?for=Discover+Bootcamp&role=applicant');
    }
    for (const host of ['pthfndr.org', 'localhost:3000', 'pthfndr.azurewebsites.net', 'www.pthfndr.org.example.com']) {
      const result = await request(port, host);
      assert.equal(result.status, 200);
      assert.equal(result.headers.location, undefined);
      assert.equal(result.body.toString(), payload);
    }
    const result = await request(port, 'pthfndr.org', 'gzip');
    assert.equal(result.headers['content-encoding'], 'gzip');
    assert.match(result.headers.vary, /Accept-Encoding/i);
    assert.equal(gunzipSync(result.body).toString(), payload);
    assert.ok(result.body.length < Buffer.byteLength(payload));
  } finally {
    await new Promise(resolve => server.close(resolve));
  }
});


test('legacy and missing URLs return the right status while client pages stay reachable', async () => {
  const shell = '<html><head><title>Home</title></head><body><div id="root"></div></body></html>';
  const routingApp = express();
  routingApp.use(redirectLegacyPage);
  routingApp.get('*', clientFallback(shell));
  const server = routingApp.listen(0, '127.0.0.1');
  await new Promise(resolve => server.once('listening', resolve));
  const base = `http://127.0.0.1:${server.address().port}`;
  try {
    for (const pathname of ['/for-institutions', '/for-institutions/']) {
      const response = await fetch(`${base}${pathname}?source=partner`, { redirect: 'manual' });
      assert.equal(response.status, 301);
      assert.equal(response.headers.get('location'), '/for-organisations/partnerships?source=partner');
    }
    for (const pathname of ['/insights/9', '/insights/4', '/not-a-real-page', '/assets/missing.js']) {
      const response = await fetch(`${base}${pathname}`);
      assert.equal(response.status, 404, pathname);
      const html = await response.text();
      assert.match(html, /<h1>Page not found<\/h1>/);
      assert.match(html, /name="robots" content="noindex"/);
    }
    for (const pattern of clientRoutes) {
      const pathname = pattern.replace(':id', 'example-project');
      for (const method of ['GET', 'HEAD']) {
        const response = await fetch(`${base}${pathname}`, { method });
        assert.equal(response.status, 200, `${method} ${pathname}`);
      }
    }
    const appSource = readFileSync('src/App.tsx', 'utf8');
    for (const [, path] of appSource.matchAll(/<Route path="([^"]+)"/g)) {
      if (path === '*') continue;
      const pathname = path === 'applications' || path === 'evidence' ? `/admin/${path}` : `/${path.replace(/^\//, '')}`;
      assert.ok(isClientRoute(pathname.replace(':id', 'example-project')), `Missing client route: ${pathname}`);
    }
    const sitemap = readFileSync('public/sitemap.xml', 'utf8');
    assert.doesNotMatch(sitemap, /for-institutions|insights\/9/);
  } finally {
    await new Promise(resolve => server.close(resolve));
  }
});
