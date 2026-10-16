export function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!));
}
export function marketingHtml(shell: string, route: string, metadata?: { title: string; description: string; canonical?: string }) {
  if (!metadata) return shell;
  const title = escapeHtml(metadata.title);
  const description = escapeHtml(metadata.description);
  const canonical = `https://pthfndr.org${metadata.canonical || route}`;
  // Replace initial shell tags to avoid canonical/title conflicts after React starts.
  const clean = shell.replace(/<title>[\s\S]*?<\/title>/gi, '').replace(/<meta\s+(?:name=["'](?:description|twitter:[^"']+)["']|property=["']og:[^"']+["'])[^>]*>/gi, '').replace(/<link\s+rel=["']canonical["'][^>]*>/gi, '');
  return clean.replace('</head>', `<title>${title}</title><meta name="description" content="${description}" /><link rel="canonical" href="${canonical}" /><meta property="og:title" content="${title}" /><meta property="og:description" content="${description}" /><meta property="og:type" content="website" /><meta property="og:url" content="${canonical}" /><meta property="og:image" content="https://pthfndr.org/og-image.png" /><meta name="twitter:card" content="summary_large_image" /></head>`);
}
