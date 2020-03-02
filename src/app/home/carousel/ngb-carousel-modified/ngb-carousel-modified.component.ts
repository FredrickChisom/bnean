
import { Component, PLATFORM_ID, NgZone, Inject, ChangeDetectorRef, Input } from '@angular/core';
import { NgbCarousel, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { platformBrowser } from '@angular/platform-browser';

@Component({
    selector: 'ngb-carousel-modified',
    templateUrl: './ngb-carousel-modified.component.html',
    styleUrls: ['./ngb-carousel-modified.component.scss'],
    host: {
        'class': 'carousel slide',
        '[style.display]': '"block"',
        'tabIndex': '0',
        '(mouseenter)': 'pause()',
        '(mouseleave)': 'cycle()'
    },
    providers: [
        NgbCarousel
    ]
})


export class NgbCarouselModifiedComponent extends NgbCarousel {

    constructor(private config: NgbCarouselConfig, @Inject(PLATFORM_ID) _platformId, _ngZone: NgZone, _cd: ChangeDetectorRef) {
        super(config, _platformId, _ngZone, _cd);
    }

    @Input() interval = 10000;

    trackByFn(index, item) {
        return item.id
    }


}
