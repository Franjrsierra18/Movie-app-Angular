import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarTvComponent } from './search-bar-tv.component';

describe('SearchBarTvComponent', () => {
  let component: SearchBarTvComponent;
  let fixture: ComponentFixture<SearchBarTvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBarTvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
