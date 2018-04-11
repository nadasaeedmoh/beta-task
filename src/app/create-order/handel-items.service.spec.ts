import { TestBed, inject } from '@angular/core/testing';

import { HandelItemsService } from './handel-items.service';

describe('HandelItemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HandelItemsService]
    });
  });

  it('should be created', inject([HandelItemsService], (service: HandelItemsService) => {
    expect(service).toBeTruthy();
  }));
});
