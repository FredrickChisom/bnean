import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbCarouselModifiedComponent } from './ngb-carousel-modified.component';

describe('NgbCarouselModifiedComponent', () => {
  let component: NgbCarouselModifiedComponent;
  let fixture: ComponentFixture<NgbCarouselModifiedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbCarouselModifiedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbCarouselModifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
