import { trigger, transition, animate, style, keyframes, state } from '@angular/animations';

export const Toggle = trigger('Toggle', [
  state(
    'hidden',
    style({ opacity: 0, transform: 'translateY(-100%)' })
  ),
  state(
    'visible',
    style({ opacity: 1, transform: 'translateY(0)' })
  ),
  transition('* => *', animate('400ms ease-in'))
])
