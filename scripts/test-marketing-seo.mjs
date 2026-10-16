import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { marketingHtml } from '../src/server/marketingHtml.ts';
import { marketingPages } from '../src/content/seo/pages.ts';
import { enquiryContext } from '../src/content/enquiry.ts';

test('initial HTML has one escaped title, description and consistent canonical', () => {
  const shell = '<html><head><title>Old</title><meta name="description" content="Old"><meta property="og:title" content="Old"></head><body><div id="root"></div></body></html>';
  const html = marketingHtml(shell, '/for-schools', { title: 'Schools & Colleges <test>', description: 'Quote "this"', canonical: '/for-organisations/partnerships' });
  assert.equal((html.match(/<title>/g) || []).length, 1);
  assert.equal((html.match(/name="description"/g) || []).length, 1);
  assert.match(html, /Schools &amp; Colleges &lt;test&gt;/);
  assert.match(html, /content="Quote &quot;this&quot;"/);
  assert.match(html, /rel="canonical" href="https:\/\/pthfndr.org\/for-organisations\/partnerships"/);
  assert.equal(marketingHtml(shell, '/unmapped'), shell);
});

test('buyer enquiry links map to valid form interests without applicant wording', () => {
  assert.deepEqual(enquiryContext(new URLSearchParams('for=Micro-Opportunity+Programme')), { role: 'institution', interest: 'youth-employability-pilot' });
  assert.deepEqual(enquiryContext(new URLSearchParams('for=Employer+Project')), { role: 'employer', interest: 'employer-project' });
  assert.deepEqual(enquiryContext(new URLSearchParams('role=institution&for=youth-employability-pilot')), { role: 'institution', interest: 'youth-employability-pilot' });
  assert.deepEqual(enquiryContext(new URLSearchParams('role=applicant&for=Tutor')), { role: 'applicant', interest: 'Tutor' });
  assert.equal(enquiryContext(new URLSearchParams('role=admin')).role, '');
});

test('built buyer pages contain visible content, internal links and correct metadata without JavaScript', () => {
  for (const route of ['/youth-employability-programmes-manchester', '/for-organisations/partnerships', '/for-organisations/create-opportunities', '/for-organisations/social-value', '/for-schools', '/for-schools/partnerships']) {
    const html = readFileSync(`dist/prerender${route}/index.html`, 'utf8');
    assert.match(html, /<h1/);
    assert.match(html, /href="\/contact\?/);
    assert.ok(html.includes(marketingPages[route].title.replace(/&/g, '&amp;')));
    assert.ok(html.includes(`href="https://pthfndr.org${marketingPages[route].canonical || route}"`));
    assert.doesNotMatch(html, /95%/);
  }
  const sitemap = readFileSync('public/sitemap.xml', 'utf8');
  assert.match(sitemap, /youth-employability-programmes-manchester/);
  assert.doesNotMatch(sitemap, /<loc>https:\/\/pthfndr.org\/for-schools<\/loc>/);
});


test('homepage has visible brand identity and one explicit WebSite entity before JavaScript', () => {
  const html = readFileSync('dist/prerender/index.html', 'utf8');
  assert.match(html, /Build real experience/);
  assert.match(html, /Pathfinder Educational Limited/);
  assert.match(html, /<h1/);
  const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(match => JSON.parse(match[1]));
  const website = schemas.filter(schema => schema['@type'] === 'WebSite');
  assert.equal(website.length, 1);
  assert.equal(website[0].name, 'PthFndR');
  assert.equal(website[0].url, 'https://pthfndr.org/');
  assert.equal(schemas.find(schema => schema['@type'] === 'EducationalOrganization').legalName, 'Pathfinder Educational Limited');
});
