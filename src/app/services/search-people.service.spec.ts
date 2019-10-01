import { TestBed } from '@angular/core/testing';

import { SearchPeopleService } from './search-people.service';

describe('SearchPeopleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchPeopleService = TestBed.get(SearchPeopleService);
    expect(service).toBeTruthy();
  });
});
