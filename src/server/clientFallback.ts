import type { Request, Response } from 'express';
import { isClientRoute } from './clientRoutes';

export function clientFallback(shell: string) {
  const notFound = shell
    .replace(/<title>[\s\S]*?<\/title>/i, '<title>Page not found | PthFndR</title>')
    .replace(/<meta[^>]+(?:name="description"|property="og:[^"]+")[^>]*>/gi, '')
    .replace('</head>', '<meta name="robots" content="noindex" /></head>')
    .replace('<div id="root"></div>', '<div id="root"><main style="max-width:48rem;margin:4rem auto;padding:1.5rem;font-family:system-ui;color:#0C2A5C"><h1>Page not found</h1><p>This page is no longer available, or the address is incorrect.</p><p><a href="/">Go to the homepage</a> or <a href="/programmes">explore our programmes</a>.</p></main></div>');
  return (req: Request, res: Response) => {
    // Dynamic opportunity routes remain client-resolved. Missing opportunity
    // records require their own data-aware handling, outside this route fix.
    if (isClientRoute(req.path)) return res.type('html').send(shell);
    return res.status(404).type('html').send(notFound);
  };
}
