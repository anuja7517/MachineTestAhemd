import { TestBed } from '@angular/core/testing';

import { EmployeeSerService } from './employee-ser.service';

describe('EmployeeSerService', () => {
  let service: EmployeeSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
