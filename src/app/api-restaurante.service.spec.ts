import { TestBed } from '@angular/core/testing';

import { ApiRestauranteService } from './api-restaurante.service';

describe('ApiRestauranteService', () => {
  let service: ApiRestauranteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiRestauranteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
