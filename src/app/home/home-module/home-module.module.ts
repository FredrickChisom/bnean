import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { NgbCarouselModifiedComponent } from '../carousel/ngb-carousel-modified/ngb-carousel-modified.component';
import { SharedModule } from 'src/app/shared';
import { SlideService } from '../slide.service';



@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    NgbCarouselModifiedComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [NgbCarouselModifiedComponent,
    HomeComponent
  ],
  providers: [SlideService]
})
export class HomeModuleModule { }
