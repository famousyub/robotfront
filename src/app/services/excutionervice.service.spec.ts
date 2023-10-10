import { TestBed } from '@angular/core/testing';

import { ExcutionerviceService } from './excutionervice.service';

describe('ExcutionerviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExcutionerviceService = TestBed.get(ExcutionerviceService);
    expect(service).toBeTruthy();
  });
});
