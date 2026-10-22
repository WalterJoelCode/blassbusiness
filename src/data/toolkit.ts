import type { ToolkitItem } from '~/types';

export const toolkit: ToolkitItem[] = [
  { icon: 'phone', title: 'Nos contactas', detail: 'Comparte la fecha, ocasión y tu idea inicial.' },
  { icon: 'mail', title: 'Definimos requisitos', detail: 'Acordamos información, estilo y funciones necesarias.' },
  { icon: 'pen', title: 'Diseñamos', detail: 'Creamos una propuesta digital a la medida de tu evento.' },
  { icon: 'check', title: 'Revisas', detail: 'Presentamos el diseño para tus comentarios.' },
  { icon: 'spark', title: 'Retroalimentamos', detail: 'Afinamos detalles y realizamos los cambios acordados.' },
  { icon: 'play', title: 'Publicamos', detail: 'Dejamos tu invitación lista para compartir por enlace.' },
  { icon: 'flag', title: 'Resultados finales', detail: 'Opcional: resumen de respuestas y alcance; no se entregan editables.' },
];

export const toolkitHeading = {
  eyebrow: 'Cómo trabajamos',
  title: 'Un proceso claro para una celebración sin complicaciones.',
  intro:
    'Te acompañamos desde la primera idea hasta que tu invitación esté lista para llegar a cada invitado.',
};
