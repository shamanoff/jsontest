import {animate, style, transition, trigger, state} from '@angular/animations';
const num = '500ms cubic-bezier(0,.98,1,.99)';
export const slideTrigger = trigger('slideDown', [
  state('default', style({
    display: 'none'
  })),
  state('open', style({
  })),
transition('default => open', [
  style({

    transform: 'translateY(-100%)'
  }),
  animate(num,
  style({
    transform: 'translateY(0)'
  })
  )
]),
  transition('open => default', [
    style({
      transform: 'translateY(0)'
    }),
    animate(num,
      style({
        transform: 'translateY(-100%)'
      })
    )
  ]),
]);

export const slideList = trigger('slideList', [
  state('up', style({
  })),
  state('down', style({
  })),
  transition('up => down', [
    style({

      transform: 'translateY(-392px)'
    }),
    animate(num,
      style({
        transform: 'translateY(0px)'
      })
    )
  ]),
  transition('down => up', [
    style({
      transform: 'translateY(0px)'
    }),
    animate(num,
      style({
        transform: 'translateY(-392px)'
      })
    )
  ]),
]);
