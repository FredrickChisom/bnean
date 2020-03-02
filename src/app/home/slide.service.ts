import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISlide } from './slide.model';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SlideService {
    private subject = new Subject<ISlide[]>();
    constructor() {
    }

    //sendSlides(SLIDES: string) {
    //  setTimeout(() => {
    //        this.subject.next([]); this.subject.complete();
    //}, 100);
    //return this.subject.asObservable();
    //}

    clearSlides() {
        this.subject.next();
    }

    getSlides(): Observable<ISlide[]> {
        this.subject = new Subject<ISlide[]>();
        setTimeout(() => {
            this.subject.next(slides); this.subject.complete();
        }, 100);
        return this.subject.asObservable();
    }

}

const slides: ISlide[] = [
    {
        id: 1,
        mainImage: 'assets/images/photo2.jpg',
        smallImage: 'assets/images/photo2.jpg',
        title: 'Bnean example.',
        subtitle: "The white panel below the picture."
    },
    {
        id: 1,
        mainImage: 'assets/images/photo3.jpg',
        smallImage: 'assets/images/photo3.jpg',
        title: 'White panel.',
        subtitle: "Don't lose the beauty of the picture."
    },
    {
        id: 1,
        mainImage: 'assets/images/photo4.jpg',
        smallImage: 'assets/images/photo4.jpg',
        title: "The beauty of picture.",
        subtitle: "Words translated into a scene."
    },
    {
        id: 1,
        mainImage: 'assets/images/photo5.jpg',
        smallImage: 'assets/images/photo5.jpg',
        title: 'A scene?',
        subtitle: 'Says a lot'
    },
    {
        id: 1,
        mainImage: 'assets/images/photo7.jpg',
        smallImage: 'assets/images/photo8.jpg',
        title: 'Says a lot!',
        subtitle: 'This Bnean example.'
    }
];
