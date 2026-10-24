/**
 * Datos de negocio editables en un solo lugar.
 *
 * Completa los campos vacíos antes de publicar datos de contacto reales.
 */
export const business = {
  name: 'Blass Business',
  brand: 'BlassDesigns',
  role: 'Invitaciones digitales interactivas',
  description:
    'BlassDesigns crea invitaciones web personalizadas e interactivas para celebrar momentos únicos.',
  locale: 'es-NI',
  countryCode: 'NI',
  location: 'Nicaragua',
  logo: {
    src: '/images/blass-media-positive.svg',
    width: 334,
    height: 112,
  },
  contact: {
    email: '',
    phone: '',
    phoneHref: '',
    whatsapp: '',
    instagram: '',
    formEndpoint: '',
  },
  social: [] as { label: string; href: string; icon: 'instagram' }[],
  availability: 'Momentos únicos, experiencias digitales inolvidables.',
  about:
    'Experiencias digitales personalizadas para anunciar, compartir y recordar los momentos que más importan.',
  copyrightHolder: 'Blass Business',
};

export default business;
