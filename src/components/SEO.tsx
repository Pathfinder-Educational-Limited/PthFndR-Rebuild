import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  type?: string;
  name?: string;
  image?: string;
  url?: string;
  noindex?: boolean;
}

export default function SEO({
  title = 'Pathfinder Educational Limited (PthFndR)',
  description = 'PthFndR empowers young people 16-24 through Discover. Develop. Deploy. A mission-led social enterprise for youth opportunity.',
  type = 'website',
  name = 'PthFndR',
  image = 'https://pthfndr.org/og-image.png',
  url,
  noindex = false,
}: SEOProps) {
  const { pathname } = useLocation();
  // Use one production origin and omit query parameters used to prefill forms.
  const canonicalPath = new URL(url || pathname, 'https://pthfndr.org').pathname;
  const canonical = `https://pthfndr.org${canonicalPath === '/' ? '/' : canonicalPath.replace(/\/+$/, '')}`;

  useLayoutEffect(() => {
    // Update existing shell tags instead of adding a second set through React's
    // metadata hoisting. Keep fallback metadata available before JS starts.
    function setTag(selector: string, tag: string, attributes: Record<string, string>) {
      const existing = Array.from(document.head.querySelectorAll(selector));
      const element = existing.shift() || document.createElement(tag);
      existing.forEach((duplicate) => duplicate.remove());
      Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
      if (!element.parentNode) document.head.appendChild(element);
    }

    const titles = Array.from(document.head.querySelectorAll('title'));
    const titleElement = titles.shift() || document.createElement('title');
    titles.forEach((duplicate) => duplicate.remove());
    titleElement.textContent = title;
    if (!titleElement.parentNode) document.head.appendChild(titleElement);

    setTag('meta[name="description"]', 'meta', { name: 'description', content: description });
    setTag('link[rel="canonical"]', 'link', { rel: 'canonical', href: canonical });
    setTag('meta[name="robots"]', 'meta', {
      name: 'robots', content: noindex ? 'noindex, nofollow' : 'index, follow',
    });
    for (const [key, value] of Object.entries({
      type, title, description, site_name: name, image, url: canonical,
    })) {
      setTag(`meta[property="og:${key}"]`, 'meta', { property: `og:${key}`, content: value });
    }
    for (const [key, value] of Object.entries({
      card: 'summary_large_image', title, description, image,
    })) {
      setTag(`meta[name="twitter:${key}"]`, 'meta', { name: `twitter:${key}`, content: value });
    }
  }, [title, description, type, name, image, canonical, noindex]);

  return null;
}
