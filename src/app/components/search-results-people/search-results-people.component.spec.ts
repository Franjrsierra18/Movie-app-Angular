import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { SearchResultsPeopleComponent } from './search-results-people.component';

describe('SearchResultsPeopleComponent', () => {
  let component: SearchResultsPeopleComponent;
  let fixture: ComponentFixture<SearchResultsPeopleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultsPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultsPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
