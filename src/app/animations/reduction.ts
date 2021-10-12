import { animate, style, transition, trigger } from '@angular/animations';

export const reduct = trigger('Welcome',[
    transition(':enter',[
      style({
        fontSize: "40px"
      }),
      animate('1s')
    ])
  ])