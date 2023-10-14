import { TestBed } from '@angular/core/testing';

import { ExcutiotService } from './excutiot.service';

describe('ExcutiotService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExcutiotService = TestBed.get(ExcutiotService);
    expect(service).toBeTruthy();
  });
});
