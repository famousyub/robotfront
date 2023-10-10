import { TestBed } from '@angular/core/testing';

import { RobotserviceService } from './robotservice.service';

describe('RobotserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RobotserviceService = TestBed.get(RobotserviceService);
    expect(service).toBeTruthy();
  });
});
