import {animate, style, transition, trigger} from '@angular/animations';

export const slideTrigger = trigger('slideDown', [
transition(':enter', [
  style({
    transform: 'translateY(-100%)'
  }),
  animate('2000ms ease-out',
  style({
    transform: 'translateY(0)'
  })
  )
])
]);
