import { TestBed } from '@angular/core/testing';

import { OrdentransporteService } from './ordentransporte.service';

describe('OrdentransporteService', () => {
  let service: OrdentransporteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdentransporteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
