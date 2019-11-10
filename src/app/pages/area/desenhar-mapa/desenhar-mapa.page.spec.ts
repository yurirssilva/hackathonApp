import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesenharMapaPage } from './desenhar-mapa.page';

describe('DesenharMapaPage', () => {
  let component: DesenharMapaPage;
  let fixture: ComponentFixture<DesenharMapaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesenharMapaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesenharMapaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
