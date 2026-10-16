// Static rendering uses the same React pages visitors see, for every user agent.
import React from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { marketingPages } from '../src/content/seo/pages';
import YouthEmployabilityManchester from '../src/pages/YouthEmployabilityManchester';
import { CohortProgramme } from '../src/pages/OrganisationPartnership';
import CreateOpportunities from '../src/pages/CreateOpportunities';
import SocialValue from '../src/pages/SocialValue';
import { marketingHtml } from '../src/server/marketingHtml';

const pages = {
  '/youth-employability-programmes-manchester': <YouthEmployabilityManchester />,
  '/for-organisations/partnerships': <CohortProgramme />,
  '/for-schools': <CohortProgramme />,
  '/for-schools/partnerships': <CohortProgramme />,
  '/for-organisations/create-opportunities': <CreateOpportunities />,
  '/for-organisations/social-value': <SocialValue />,
};
const shell = readFileSync('dist/index.html', 'utf8');
for (const [route, page] of Object.entries(pages)) {
  const content = renderToString(<MemoryRouter initialEntries={[route]}><header><nav aria-label="Main navigation"><a href="/">PthFndR</a> · <a href="/programmes">Programmes</a> · <a href="/for-organisations">For organisations</a> · <a href="/contact">Contact</a></nav></header><main>{page}</main></MemoryRouter>);
  const html = marketingHtml(shell, route, marketingPages[route]).replace('<div id="root"></div>', `<div id="root">${content}</div>`);
  const directory = `dist/prerender${route}`;
  mkdirSync(directory, { recursive: true });
  writeFileSync(`${directory}/index.html`, html);
}
console.log(`Statically rendered ${Object.keys(pages).length} marketing pages.`);
