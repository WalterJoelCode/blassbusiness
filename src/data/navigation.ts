import type { NavItem } from '~/types';

/**
 * Primary navigation.
 *
 * `anchor` is used only on the homepage: when the visitor is already on
 * `/`, the link jumps to that section instead of reloading the page.
 */
export const primaryNav: NavItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Criterios', href: '/#criterios', anchor: '#criterios' },
  { label: 'Invitaciones', href: '/#invitaciones', anchor: '#invitaciones' },
  { label: 'Proceso', href: '/#proceso', anchor: '#proceso' },
  { label: 'Preguntas', href: '/#faq', anchor: '#faq' },
];

/** Extra links shown only in the mobile drawer. */
export const mobileExtraNav: NavItem[] = [
  { label: 'Contacto', href: '/#contact' },
];
