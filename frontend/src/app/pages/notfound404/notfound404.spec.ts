import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Notfound404 } from './notfound404';

describe('Notfound404', () => {
  let component: Notfound404;
  let fixture: ComponentFixture<Notfound404>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Notfound404],
    }).compileComponents();

    fixture = TestBed.createComponent(Notfound404);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
