import type { Client } from '~/types';

/**
 * Logos for the marquee strip. Each entry draws on a 24×24 viewBox with
 * `fill="none" stroke="currentColor" stroke-width="1.8"`, so a simple
 * path or a couple of shapes is all you need.
 */
export const clients: Client[] = [
  { name: 'Responsabilidad', shape: '<path d="m5 12 4.2 4.2L19 6.8"/>' },
  { name: 'Creatividad', shape: '<path d="M12 3.5 14 9l5.5 2-5.5 2-2 5.5-2-5.5-5.5-2L10 9z"/>' },
  { name: 'Interactividad', shape: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7v10M7 12h10"/>' },
  { name: 'Responsividad', shape: '<rect x="5" y="4" width="10" height="16" rx="2"/><path d="M17 8h2v10a2 2 0 0 1-2 2h-4"/>' },
];

export const clientsLabel = 'Nuestros criterios';
