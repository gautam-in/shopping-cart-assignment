import {
  trigger,
  transition,
  animate,
  style,
  keyframes,
  state,
} from '@angular/animations';

export const Enter = trigger('Enter', [
  transition(
    ':enter',
    animate(
      '0.75s ease-in-out',
      keyframes([
        style({ opacity: '0', offset: 0 }),
        style({ opacity: '0.5', offset: 0.4 }),
        style({ opacity: '1', offset: 1 }),
      ])
    )
  ),
  transition(
    ':leave',
    animate(
      '0.25s ease-in-out',
      keyframes([
        style({ opacity: '1', offset: 0 }),
        style({ opacity: '0.5', offset: 0.4 }),
        style({ opacity: '0', offset: 1 }),
      ])
    )
  ),
]);
