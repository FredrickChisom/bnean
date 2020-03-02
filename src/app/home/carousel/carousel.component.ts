import { Component, OnInit, OnDestroy } from '@angular/core';
import { SlideService } from '../slide.service';
import { ISlide } from '../slide.model';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnDestroy {
    //OnInit {
    slides: ISlide[] = [];
    subscription: Subscription;

    constructor(private slideService: SlideService) {
        this.subscription = this.slideService.getSlides().subscribe(slides => {
            if (slides) {
                this.slides.push();
            } else { this.slides = slides }
        });
    }

    //give unique id to ngfor output
    trackByFn(index, item) {
        return item.id
    }

    ngOnInit() {
        this.slideService.getSlides().subscribe(slides => {
            this.slides = slides
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}

