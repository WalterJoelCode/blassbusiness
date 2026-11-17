import type { SiteConfig } from '~/types';
import business from './business';

/**
 * ============================================================
 *  THE ONE FILE TO EDIT FIRST
 * ============================================================
 *
 * Site-wide configuration is assembled here. Edit `src/config/business.ts`
 * for the business and contact values used by the header, footer, contact
 * page, metadata, structured data, RSS feed and sitemap.
 *
 * The canonical URL lives in `astro.config.mjs` (`site`) and is read
 * back here through `import.meta.env.SITE`.
 */
export const siteConfig: SiteConfig = {
  name: business.name,

  logo: {
    header: business.logo,
    footer: business.logo,
  },

  author: business.brand,
  role: business.role,
  title: `${business.brand} — ${business.role}`,
  description: business.description,
  url: new URL(import.meta.env.BASE_URL, import.meta.env.SITE ?? 'https://blassbusiness.com').toString().replace(/\/$/, ''),
  ogImage: '/og-default.png',
  locale: business.locale,
  themeColor: '#c8f14d',

  contact: {
    ...business.contact,
    location: business.location,
    availability: business.availability,
  },

  social: business.social,

  about: business.about,

  copyrightHolder: business.copyrightHolder,
};

export default siteConfig;
