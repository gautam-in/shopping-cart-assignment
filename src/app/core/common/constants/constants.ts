import { MatSidenav } from '@angular/material/sidenav';

export class Constants {
  public static SIDENAV: MatSidenav;
}

export const MY_CUSTOM_BREAKPOINTS = [
  {
    alias: 'xs',
    suffix: 'sm',
    mediaQuery: '(min-width: 768px) and (max-width: 1024px)',
    overlapping: false,
  },
  {
    alias: 'lt-xs',
    suffix: 'lt-xs',
    mediaQuery: ' (max-width: 767px )',
    overlapping: false,
  },
  {
    alias: 'gt-xs',
    suffix: 'gt-xs',
    mediaQuery: '(min-width: 1025px)',
    overlapping: false,
  },
];
