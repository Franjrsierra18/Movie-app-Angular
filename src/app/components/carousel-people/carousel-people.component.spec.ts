import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { CarouselPeopleComponent } from './carousel-people.component';

describe('CarouselPeopleComponent', () => {
  let component: CarouselPeopleComponent;
  let fixture: ComponentFixture<CarouselPeopleComponent>;

  beforeEach(waitForAsync(() => {
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
