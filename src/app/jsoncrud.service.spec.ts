import { TestBed } from '@angular/core/testing';

import { JsoncrudService } from './jsoncrud.service';

describe('JsoncrudService', () => {
  let service: JsoncrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsoncrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
