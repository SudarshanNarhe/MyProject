import { TestBed } from '@angular/core/testing';

import { EmployeejsonService } from './employeejson.service';

describe('EmployeejsonService', () => {
  let service: EmployeejsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeejsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
