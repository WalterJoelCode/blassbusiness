import type { SiteConfig } from '~/types';

/**
 * ============================================================
 *  THE ONE FILE TO EDIT FIRST
 * ============================================================
 *
 * Everything here is demo content. Replace it with your own and the
 * header, footer, hero, contact page, metadata, structured data, RSS
 * feed and sitemap all follow.
 *
 * The canonical URL lives in `astro.config.mjs` (`site`) and is read
 * back here through `import.meta.env.SITE`.
 */
export const siteConfig: SiteConfig = {
  name: 'Blass Business',

  logo: {
    header: { src: '/images/blass-media-positive.svg', width: 334, height: 112 },
    footer: { src: '/images/blass-media-positive.svg', width: 334, height: 112 },
  },

  author: 'BlassDesing',
  role: 'Invitaciones digitales interactivas',
  title: 'BlassDesing — Invitaciones digitales interactivas',
  description:
    'BlassDesing crea invitaciones web personalizadas e interactivas para celebrar momentos únicos.',
  url: import.meta.env.SITE ?? 'https://blassbusiness.com',
  ogImage: '/og-default.png',
  locale: 'es-NI',
  themeColor: '#c8f14d',

  contact: {
    email: '',
    phone: 'WhatsApp',
    phoneHref: '',
    whatsapp: 'https://www.whatsapp.com/',
    location: 'Nicaragua',
    availability: 'Momentos únicos, experiencias digitales inolvidables.',
    // Paste a Formspree / Web3Forms / Netlify endpoint here to make the
    // contact form live. See "Contact form" in the README.
    formEndpoint: '',
  },

  social: [
    { label: 'Instagram', href: 'https://www.instagram.com/', icon: 'instagram' },
  ],

  about:
    'Experiencias digitales personalizadas para anunciar, compartir y recordar los momentos que más importan.',

  copyrightHolder: 'Blass Business',
};

export default siteConfig;
