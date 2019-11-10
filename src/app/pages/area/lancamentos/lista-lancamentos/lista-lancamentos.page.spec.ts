import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaLancamentosPage } from './lista-lancamentos.page';

describe('ListaLancamentosPage', () => {
  let component: ListaLancamentosPage;
  let fixture: ComponentFixture<ListaLancamentosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaLancamentosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaLancamentosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
