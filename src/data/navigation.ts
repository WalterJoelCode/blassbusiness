import type { NavItem } from '~/types';

/**
 * Primary navigation.
 *
 * `anchor` is used only on the homepage: when the visitor is already on
 * `/`, the link jumps to that section instead of reloading the page.
 */
export const primaryNav: NavItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Proceso', href: '/#proceso', anchor: '#proceso' },
  { label: 'Invitaciones', href: '/#invitaciones', anchor: '#invitaciones' },
  { label: 'Preguntas', href: '/#faq', anchor: '#faq' },
  { label: 'Contacto', href: '/#contact', anchor: '#contact' },
];
