import { TestBed } from '@angular/core/testing';

import { SearchTvService } from './search-tv.service';

describe('SearchTvService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchTvService = TestBed.get(SearchTvService);
    expect(service).toBeTruthy();
  });
});
