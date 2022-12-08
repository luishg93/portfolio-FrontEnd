import { TestBed } from '@angular/core/testing';

import { PortfolioDatosService } from './portfolio-datos.service';

describe('PortfolioDatosService', () => {
  let service: PortfolioDatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortfolioDatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
