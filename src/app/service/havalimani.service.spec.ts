import { TestBed } from '@angular/core/testing';

import { HavalimaniService } from './havalimani.service';

describe('HavalimaniService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HavalimaniService = TestBed.get(HavalimaniService);
    expect(service).toBeTruthy();
  });
});
