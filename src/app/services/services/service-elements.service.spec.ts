import { TestBed } from '@angular/core/testing';

import { ServiceElementsService } from './service-elements.service';

describe('ServiceElementsService', () => {
  let service: ServiceElementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceElementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
