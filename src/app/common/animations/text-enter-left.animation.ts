import { trigger, transition, animate, style, keyframes, state } from '@angular/animations';

export const TextEnterLeft = trigger('TextEnterLeft', [
  transition(':enter',
    animate('0.5s ease',
      keyframes([
        style({ opacity: '0', transform: 'translateX(-20%)', offset: 0, }),
        style({ opacity: '0.5', transform: 'translateX(-10%)', offset: 0.4, }),
        style({ opacity: '1', transform: 'translateX(0)', offset: 1, })
      ])
    )
  )
])
