import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Enproceso } from './enproceso';

describe('Enproceso', () => {
  let component: Enproceso;
  let fixture: ComponentFixture<Enproceso>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Enproceso],
    }).compileComponents();

    fixture = TestBed.createComponent(Enproceso);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
