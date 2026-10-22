/** Small helpers shared across pages and components. */

/**
 * Resolve a file or internal route from the active Astro base path.
 *
 * Public assets are intentionally stored as root-like paths in content/data
 * (`/images/...`). This keeps the data portable while this helper adds the
 * GitHub Pages project path exactly once at render time.
 */
export function withBase(path: string, base = import.meta.env.BASE_URL): string {
  if (!path || path.startsWith('#') || /^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(path)) return path;

  const prefix = base.endsWith('/') ? base : `${base}/`;
  if (path === prefix.slice(0, -1) || path.startsWith(prefix)) return path;
  return `${prefix}${path.replace(/^\/+/, '')}`;
}

/** Resolve a site-relative path against the configured `site` origin. */
export function absoluteUrl(path: string, site: URL | undefined): string {
  const origin = site ?? new URL('http://localhost:4321');
  return new URL(withBase(path), origin).href;
}

/**
 * Canonical URL for the current page.
 *
 * `trailingSlash: 'always'` is set in `astro.config.mjs`, so the pathname
 * already carries its slash; this only guards against the odd edge case.
 */
export function canonicalUrl(url: URL, site: URL | undefined): string {
  const origin = site ?? new URL(url.origin);
  const pathname = url.pathname.endsWith('/') || url.pathname.includes('.')
    ? url.pathname
    : `${url.pathname}/`;
  return new URL(pathname, origin).href;
}

/** e.g. `22 Jul 2026` */
export function formatDate(date: Date, locale = 'en-GB'): string {
  return new Intl.DateTimeFormat(locale, {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

/** `2026-07-22`, for `<time datetime>` and structured data. */
export function isoDate(date: Date): string {
  return date.toISOString().split('T')[0]!;
}

/** Hide drafts in production but keep them visible while developing. */
export function isVisible(entry: { data: { draft?: boolean } }): boolean {
  return import.meta.env.DEV || !entry.data.draft;
}

/** Pads a number for the `S/01` style labels. */
export function pad(n: number, width = 2): string {
  return String(n).padStart(width, '0');
}
