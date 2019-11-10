import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFazendaPage } from './lista-fazenda.page';

describe('ListaFazendaPage', () => {
  let component: ListaFazendaPage;
  let fixture: ComponentFixture<ListaFazendaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaFazendaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaFazendaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
