import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Galeriafichas } from './galeriafichas';

describe('Galeriafichas', () => {
  let component: Galeriafichas;
  let fixture: ComponentFixture<Galeriafichas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Galeriafichas],
    }).compileComponents();

    fixture = TestBed.createComponent(Galeriafichas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
