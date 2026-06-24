import { TestBed } from '@angular/core/testing';

import { PlantasServicio } from './plantas-servicio';

describe('PlantasServicio', () => {
  let service: PlantasServicio;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlantasServicio);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
