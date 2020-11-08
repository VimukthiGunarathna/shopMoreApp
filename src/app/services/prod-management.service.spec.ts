import { TestBed } from '@angular/core/testing';

import { ProdManagementService } from './prod-management.service';

describe('ProdManagementService', () => {
  let service: ProdManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
