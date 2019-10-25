import { TestBed } from '@angular/core/testing';

import { KoltukService } from './koltuk.service';

describe('KoltukService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KoltukService = TestBed.get(KoltukService);
    expect(service).toBeTruthy();
  });
});
