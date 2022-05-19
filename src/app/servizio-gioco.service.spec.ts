import { TestBed } from '@angular/core/testing';

import { ServizioGiocoService } from './servizio-gioco.service';

describe('ServizioGiocoService', () => {
  let service: ServizioGiocoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServizioGiocoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
