import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajesLista } from './mensajes-lista';

describe('MensajesLista', () => {
  let component: MensajesLista;
  let fixture: ComponentFixture<MensajesLista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MensajesLista],
    }).compileComponents();

    fixture = TestBed.createComponent(MensajesLista);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
