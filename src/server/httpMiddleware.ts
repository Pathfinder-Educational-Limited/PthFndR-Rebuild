import type { Request, Response, NextFunction } from 'express';

// Match only the public www host. Local development and Azure health-check
// hostnames continue normally, without trusting arbitrary forwarded hosts.
export function redirectCanonicalHost(req: Request, res: Response, next: NextFunction) {
  if (/^www\.pthfndr\.org(?::\d+)?$/i.test(req.headers.host || '')) {
    // 308 preserves methods and request bodies, including form submissions.
    res.redirect(308, `https://pthfndr.org${req.originalUrl}`);
    return;
  }
  next();
}


// A renamed audience page has a directly relevant replacement. Keep query
// parameters, including campaign attribution, when following the old URL.
export function redirectLegacyPage(req: Request, res: Response, next: NextFunction) {
  if (/^\/for-institutions\/?$/i.test(req.path)) {
    const query = req.originalUrl.includes('?') ? req.originalUrl.slice(req.originalUrl.indexOf('?')) : '';
    res.redirect(301, `/for-organisations/partnerships${query}`);
    return;
  }
  next();
}
