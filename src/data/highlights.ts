/**
 * Copy blocks for the homepage sections that are one-of-a-kind.
 * Longer, repeating content lives in its own data file or content
 * collection instead.
 */

export const hero = {
  greeting: 'BlassDesing presenta',
  /** Rendered on two lines. */
  nameLines: ['Tu evento.', 'Tu experiencia.'],
  intro:
    'Invitaciones web personalizadas para que cada anuncio comience con emoción, información clara e interacción.',
  ctaLabel: 'Escríbenos por WhatsApp',
  ctaHref: '#contact',
  photo: {
    src: '',
    alt: '',
    width: 960,
    height: 1210,
  },
  aside: {
    roleLine: ['Diseño a tu medida', 'Para celebrar en digital'],
    title: ['Invitaciones', 'interactivas'],
    /** Small avatar stack — decorative, so the images carry empty alt text. */
    stack: [],
    stackBadge: '✦',
    kpi: '100%',
    kpiLabel: 'personalizadas para tu ocasión',
    note: 'Diseñadas para compartir desde cualquier dispositivo',
  },
};

export const collaborate = {
  eyebrow: 'De una invitación a una experiencia',
  title: 'Tus invitados reciben mucho más que una fecha.',
  body: 'Cuéntanos la ocasión y la convertimos en una invitación digital con el estilo, la información y las interacciones que tu celebración merece. También podemos diseñar una versión impresa para acompañar tu experiencia.',
  ctaLabel: 'Contactar por WhatsApp',
  ctaHref: '#contact',
  /**
   * The staggered pair beside the copy. Swap these for the bundled SVG
   * mockups (`BookletMock`, `TabletMock` in src/components/art/) if you would
   * rather show artwork than photography — see the README.
   */
  images: [
    {
      src: '/images/collab-team.webp',
      alt: 'Two colleagues standing in a bright office, reviewing work together on a tablet',
      width: 760,
      height: 760,
    },
    {
      src: '/images/collab-meeting.webp',
      alt: 'Two colleagues talking over an open laptop at a meeting table',
      width: 760,
      height: 760,
    },
  ],
};

export const about = {
  eyebrow: 'Background',
  title: 'Forty projects taught me the same lesson forty times.',
  body: 'I spent my twenties inside agencies making things look expensive. Somewhere around the fourth rebrand that never shipped, I started asking what the work was actually for. These days I take fewer clients, ask the awkward questions in week one, and stay until the thing is live.',
  points: [
    'I read your support inbox before I open a design file.',
    'One senior person on the work from first call to launch — nothing gets passed down.',
    'If I think the project is the wrong project, you hear it before you pay me.',
  ],
  image: {
    src: '/images/about-studio.webp',
    alt: 'Designers arranging sticky notes and printed layouts across a studio table',
    width: 900,
    height: 954,
  },
  badge: {
    value: '15',
    label: 'Years working independently, almost always with teams of under twenty people.',
  },
  ctaLabel: 'See the work',
  ctaHref: '/work/',
};

export const servicesHeading = {
  eyebrow: 'Engagements',
  title: 'Six ways to put me to work.',
  ctaLabel: 'Ask for a scope',
  ctaHref: '/contact/',
};

export const workHeading = {
  eyebrow: 'Tipos de invitaciones',
  title: 'Cada ocasión merece una primera impresión inolvidable.',
};

export const journalHeading = {
  eyebrow: 'Notebook',
  title: 'Things I keep having to explain.',
  ctaLabel: 'Every article',
  ctaHref: '/journal/',
};

export const cta = {
  title: 'Haz que tu celebración comience antes del evento.',
  body: 'Comparte tu idea y diseñemos una experiencia digital única para tus invitados.',
  primaryLabel: 'Escríbenos por WhatsApp',
};
