import type { SiteConfig } from '~/types';
import business from '~/config/business';

/**
 * Structured data builders.
 *
 * Everything here is derived from `src/config/site.ts` and the page's own
 * content — nothing is invented. Drop a builder if you do not want the
 * corresponding schema.org type emitted.
 */

type Json = Record<string, unknown>;

export function organizationSchema(site: SiteConfig): Json {
  const baseUrl = `${site.url}/`;
  const logo = new URL(`${import.meta.env.BASE_URL}${site.logo.header.src.replace(/^\//, '')}`, baseUrl).href;

  return {
    '@type': 'Organization',
    '@id': `${site.url}/#organization`,
    name: site.name,
    alternateName: site.author,
    url: baseUrl,
    logo: { '@type': 'ImageObject', url: logo, width: site.logo.header.width, height: site.logo.header.height },
    image: new URL(`${import.meta.env.BASE_URL}og-default.png`, baseUrl).href,
    description: site.description,
    address: { '@type': 'PostalAddress', addressCountry: business.countryCode },
    ...(site.contact.email ? { email: `mailto:${site.contact.email}` } : {}),
    ...(site.contact.phone ? { telephone: site.contact.phone } : {}),
    ...(site.social.length ? { sameAs: site.social.map((s) => s.href) } : {}),
  };
}

/** @deprecated Use organizationSchema for all new BlassDesigns pages. */
export const personSchema = organizationSchema;

export function websiteSchema(site: SiteConfig): Json {
  return {
    '@type': 'WebSite',
    '@id': `${site.url}/#website`,
    url: `${site.url}/`,
    name: site.name,
    description: site.description,
    inLanguage: site.locale,
    publisher: { '@id': `${site.url}/#organization` },
  };
}

export function blogPostingSchema(
  site: SiteConfig,
  post: {
    title: string;
    description: string;
    url: string;
    image: string;
    datePublished: string;
    dateModified?: string;
    author: string;
    keywords?: string[];
  }
): Json {
  return {
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    url: post.url,
    image: post.image,
    datePublished: post.datePublished,
    dateModified: post.dateModified ?? post.datePublished,
    author: { '@type': 'Person', name: post.author, url: `${site.url}/` },
    publisher: { '@id': `${site.url}/#organization` },
    mainEntityOfPage: { '@type': 'WebPage', '@id': post.url },
    inLanguage: site.locale,
    ...(post.keywords?.length ? { keywords: post.keywords.join(', ') } : {}),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]): Json {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/** Wraps one or more schema objects in a single `@graph` document. */
export function graph(nodes: Json[]): string {
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': nodes });
}
