import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDescriptionDeckComponent } from './card-description-deck.component';

describe('CardDescriptionDeckComponent', () => {
  let component: CardDescriptionDeckComponent;
  let fixture: ComponentFixture<CardDescriptionDeckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardDescriptionDeckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDescriptionDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
