import { TestBed } from '@angular/core/testing';

import { NaturaGasesService } from './natura-gases.service';

describe('NaturaGasesService', () => {
  let service: NaturaGasesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NaturaGasesService);
  });
  

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
