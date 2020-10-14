import { TestBed } from '@angular/core/testing';

import { NewEmployeeServiceService } from './new-employee-service.service';

describe('NewEmployeeServiceService', () => {
  let service: NewEmployeeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewEmployeeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
