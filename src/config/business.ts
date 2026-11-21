/**
 * ÚNICO ARCHIVO PARA EDITAR LOS DATOS DEL NEGOCIO Y CONTACTO.
 *
 * Completa los campos vacíos con tus datos reales. Las páginas, botones,
 * footer, SEO y datos estructurados toman la información desde aquí.
 */
const contact = {
  email: '',
  phone: '',
  /** Número en formato internacional para enlaces tel:, por ejemplo +505... */
  phoneHref: '',
  /** URL completa de WhatsApp, por ejemplo https://wa.me/505... */
  whatsapp: '',
  /** URL completa del perfil de Instagram. */
  instagram: '',
  /** URLs opcionales de otras redes. */
  facebook: '',
  linkedin: '',
  tiktok: '',
  formEndpoint: '',
};

const social = [
  { label: 'Instagram', href: contact.instagram, icon: 'instagram' as const },
  { label: 'Facebook', href: contact.facebook, icon: 'facebook' as const },
  { label: 'LinkedIn', href: contact.linkedin, icon: 'linkedin' as const },
].filter((item) => item.href.trim());

export const business = {
  name: 'Valbas',
  brand: 'Valbas',
  role: 'Invitaciones digitales interactivas',
  description:
    'Valbas crea invitaciones web personalizadas e interactivas para celebrar momentos únicos.',
  locale: 'es-NI',
  countryCode: 'NI',
  location: 'Nicaragua',
  logo: {
    src: '/images/valbas-logo.svg',
    width: 334,
    height: 112,
  },
  iso: {
    src: '/images/valbas-iso.svg',
    width: 115,
    height: 112,
  },
  contact,
  social,
  availability: 'Momentos únicos, experiencias digitales inolvidables.',
  about:
    'Experiencias digitales personalizadas para anunciar, compartir y recordar los momentos que más importan.',
  copyrightHolder: 'Valbas',
};

export default business;
