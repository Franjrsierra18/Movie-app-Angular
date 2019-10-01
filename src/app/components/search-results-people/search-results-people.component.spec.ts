import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultsPeopleComponent } from './search-results-people.component';

describe('SearchResultsPeopleComponent', () => {
  let component: SearchResultsPeopleComponent;
  let fixture: ComponentFixture<SearchResultsPeopleComponent>;

  beforeEach(async(() => {
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
