import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselTvComponent } from './carousel-tv.component';

describe('CarouselTvComponent', () => {
  let component: CarouselTvComponent;
  let fixture: ComponentFixture<CarouselTvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselTvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
