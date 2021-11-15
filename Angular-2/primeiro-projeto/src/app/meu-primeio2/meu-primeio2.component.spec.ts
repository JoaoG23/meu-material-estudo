import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuPrimeio2Component } from './meu-primeio2.component';

describe('MeuPrimeio2Component', () => {
  let component: MeuPrimeio2Component;
  let fixture: ComponentFixture<MeuPrimeio2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeuPrimeio2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuPrimeio2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
