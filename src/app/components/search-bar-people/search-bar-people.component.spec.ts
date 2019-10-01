import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarPeopleComponent } from './search-bar-people.component';

describe('SearchBarPeopleComponent', () => {
  let component: SearchBarPeopleComponent;
  let fixture: ComponentFixture<SearchBarPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBarPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
