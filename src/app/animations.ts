import {
  trigger,
  animate,
  transition,
  style,
  query
} from '@angular/animations';
import { group, animateChild } from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [

  /**
   *
   *  from page home to page about: ‘home => about’, or from page about to page home: ‘about => home’.

   */
  transition('* <=> *', [
    /**
             * group: which is used for grab to grab anything that’s entering or leaving the DOM.
     */
    group([
      /**
       * enter into the state
       */
      query(
        ':enter',
        [
          style({
            opacity: 0,
            transform: 'translateY(9rem) rotate(-10deg)'
          }),
          animate(
            '0.35s cubic-bezier(0, 1.8, 1, 1.8)',
            style({ opacity: 1, transform: 'translateY(0) rotate(0)' })
          ),
          /**
           * This will trigger any inner animations after the main animation is complete.
           */
          animateChild()
        ],
        { optional: true }
      ),
      query(':leave', [animate('0.35s', style({ opacity: 1 })), animateChild()], { optional: true })
    ])
  ])
])
