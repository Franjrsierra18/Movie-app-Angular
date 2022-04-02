import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { TvPopularComponent } from './tv-popular.component';

describe('TvPopularComponent', () => {
  let component: TvPopularComponent;
  let fixture: ComponentFixture<TvPopularComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TvPopularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvPopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
