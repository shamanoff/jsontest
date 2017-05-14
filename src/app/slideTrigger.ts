import {animate, style, transition, trigger, state} from '@angular/animations';

export const slideTrigger = trigger('slideDown', [
  state('default', style({
  })),
  state('open', style({
  })),
transition('default => open', [
  style({
    transform: 'translateY(-100%)'
  }),
  animate('1000ms ease-in',
  style({
    transform: 'translateY(0)'
  })
  )
]),
  transition('open => default',
    animate(1000,
      style({
        transform: 'translateY(-100%)'
      })
    )
  )
]);
