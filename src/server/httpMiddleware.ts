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
