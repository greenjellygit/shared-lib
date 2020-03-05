import { TestBed } from '@angular/core/testing';

import { LayoutLibService } from './layout-lib.service';

describe('LayoutLibService', () => {
  let service: LayoutLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LayoutLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
