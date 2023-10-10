import { TestBed } from '@angular/core/testing';

import { PlanificationerviceService } from './planificationervice.service';

describe('PlanificationerviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlanificationerviceService = TestBed.get(PlanificationerviceService);
    expect(service).toBeTruthy();
  });
});
