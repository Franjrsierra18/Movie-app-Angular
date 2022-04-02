import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { SearchResultsTvComponent } from './search-results-tv.component';

describe('SearchResultsTvComponent', () => {
  let component: SearchResultsTvComponent;
  let fixture: ComponentFixture<SearchResultsTvComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultsTvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultsTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
