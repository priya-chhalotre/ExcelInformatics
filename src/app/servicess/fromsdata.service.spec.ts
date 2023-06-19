import { TestBed } from '@angular/core/testing';

import { FromsdataService } from './fromsdata.service';

describe('FromsdataService', () => {
  let service: FromsdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FromsdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
