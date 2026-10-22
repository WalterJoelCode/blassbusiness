import type { FaqItem } from '~/types';

export const faq: FaqItem[] = [
  {
    question: '¿Entregan los archivos editables?',
    answer:
      'No están incluidos en el servicio estándar. La entrega de editables puede evaluarse como un servicio adicional, con un costo mayor según el alcance del proyecto.',
  },
  {
    question: '¿Puedo definir lo que lleva mi invitación?',
    answer:
      'Sí. Tú defines tus requerimientos: información del evento, galería, música, mapa, cuenta regresiva, confirmación por WhatsApp y otros elementos según el diseño contratado.',
  },
  {
    question: '¿Qué métodos de pago aceptan?',
    answer:
      'Aceptamos todos los métodos de pago disponibles que se acuerden previamente para tu comodidad.',
  },
  {
    question: '¿Con cuánto tiempo debo solicitar mi invitación?',
    answer:
      'Recomendamos contactarnos al menos 12 días antes de la fecha en que planeas enviar las invitaciones a tus invitados.',
  },
  {
    question: '¿La invitación funciona en celulares?',
    answer:
      'Sí. Cada invitación se diseña para verse y funcionar correctamente en celulares, tabletas y computadoras.',
  },
  {
    question: '¿También realizan sitios web personalizados?',
    answer:
      'Sí. Podemos crear sitios web personalizados mucho más interactivos para tu evento o proyecto, desarrollados con Astro y publicados mediante GitHub Pages.',
  },
];

export const faqHeading = {
  eyebrow: 'FAQ',
  title: 'Todo lo que necesitas saber antes de comenzar.',
  asideTitle: '¿Tienes otra pregunta?',
  asideBody:
    'Escríbenos y cuéntanos sobre tu evento. Te orientamos para elegir una invitación que se sienta completamente tuya.',
};
