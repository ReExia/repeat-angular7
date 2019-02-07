import { TestBed } from '@angular/core/testing';

import { StorgeService } from './storge.service';

describe('StorgeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StorgeService = TestBed.get(StorgeService);
    expect(service).toBeTruthy();
  });
});
