import test from 'node:test';
import assert from 'node:assert/strict';
import http from 'node:http';
import { gunzipSync } from 'node:zlib';
import express from 'express';
import compression from 'compression';
import { redirectCanonicalHost } from '../src/server/httpMiddleware.ts';

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
