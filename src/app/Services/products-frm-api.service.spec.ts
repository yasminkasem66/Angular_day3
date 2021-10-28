import { TestBed } from '@angular/core/testing';

import { ProductsFrmAPIService } from './products-frm-api.service';

describe('ProductsFrmAPIService', () => {
  let service: ProductsFrmAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsFrmAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
