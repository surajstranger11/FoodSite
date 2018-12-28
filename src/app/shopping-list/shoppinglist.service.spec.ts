import { TestBed } from '@angular/core/testing';

import { ShoppinglistService } from './shoppinglist.service';

describe('ShoppinglistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShoppinglistService = TestBed.get(ShoppinglistService);
    expect(service).toBeTruthy();
  });
});
