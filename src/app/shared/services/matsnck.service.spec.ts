import { TestBed } from '@angular/core/testing';

import { MatsnckService } from './matsnck.service';

describe('MatsnckService', () => {
  let service: MatsnckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatsnckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
