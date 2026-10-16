// Static rendering uses the same React pages visitors see, for every user agent.
import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { PassThrough } from 'node:stream';
import Home from '../src/pages/Home';
import { OrganizationSchema } from '../src/components/SEOSchemas';
import { MemoryRouter } from 'react-router-dom';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { marketingPages } from '../src/content/seo/pages';
import YouthEmployabilityManchester from '../src/pages/YouthEmployabilityManchester';
import { CohortProgramme } from '../src/pages/OrganisationPartnership';
import CreateOpportunities from '../src/pages/CreateOpportunities';
import SocialValue from '../src/pages/SocialValue';
import { marketingHtml } from '../src/server/marketingHtml';

const pages = {
  '/': <Home />,
  '/youth-employability-programmes-manchester': <YouthEmployabilityManchester />,
  '/for-organisations/partnerships': <CohortProgramme />,
  '/for-schools': <CohortProgramme />,
  '/for-schools/partnerships': <CohortProgramme />,
  '/for-organisations/create-opportunities': <CreateOpportunities />,
  '/for-organisations/social-value': <SocialValue />,
};
const shell = readFileSync('dist/index.html', 'utf8');
for (const [route, page] of Object.entries(pages)) {
  const element = <MemoryRouter initialEntries={[route]}><header><nav aria-label="Main navigation"><a href="/">PthFndR</a> · <a href="/programmes">Programmes</a> · <a href="/for-organisations">For organisations</a> · <a href="/contact">Contact</a></nav></header><OrganizationSchema /><main>{page}</main></MemoryRouter>;
  const content = await new Promise<string>((resolve, reject) => {
    const output = new PassThrough();
    let html = '';
    output.on('data', chunk => { html += chunk.toString(); });
    output.on('end', () => resolve(html));
    output.on('error', reject);
    const stream = renderToPipeableStream(element, {
      onAllReady() { stream.pipe(output); },
      onError(error) { reject(error); },
    });
  });
  const html = marketingHtml(shell, route, marketingPages[route]).replace('<div id="root"></div>', `<div id="root">${content}</div>`);
  const directory = `dist/prerender${route}`;
  mkdirSync(directory, { recursive: true });
  writeFileSync(`${directory}/index.html`, html);
}
console.log(`Statically rendered ${Object.keys(pages).length} marketing pages.`);
