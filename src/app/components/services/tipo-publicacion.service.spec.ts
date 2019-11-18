import { TestBed } from '@angular/core/testing';

import { TipoPublicacionService } from './tipo-publicacion.service';

describe('TipoPublicacionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipoPublicacionService = TestBed.get(TipoPublicacionService);
    expect(service).toBeTruthy();
  });
});
