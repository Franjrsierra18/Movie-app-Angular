import { TestBed } from '@angular/core/testing';

import { TvService } from './tv.service';

describe('TvService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TvService = TestBed.get(TvService);
    expect(service).toBeTruthy();
  });
});
