import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselPeopleComponent } from './carousel-people.component';

describe('CarouselPeopleComponent', () => {
  let component: CarouselPeopleComponent;
  let fixture: ComponentFixture<CarouselPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
