import type { Stat } from '~/types';

export const stats: Stat[] = [
  { value: 1, label: 'enlace para compartir todo' },
  { value: 100, suffix: '%', label: 'adaptadas a tus dispositivos' },
  { value: 0, label: 'límites para crear a tu manera' },
];

/** Headline above the stats band, split so the tail can be dimmed. */
export const statsHeading = {
  lead: 'Las invitaciones digitales son más prácticas,',
  tail: 'interactivas y memorables desde el primer clic.',
};

/**
 * Poster frame for the studio reel. Set `embedUrl` to a YouTube/Vimeo
 * privacy-friendly embed to make the play button load a real video;
 * leave it empty and the button is hidden.
 */
export const reel = {
  image: '/images/reel-poster.webp',
  alt: 'Two people reviewing notes and sketches at a studio table',
  width: 1000,
  height: 625,
  embedUrl: '',
  label: 'Play the studio reel',
};
