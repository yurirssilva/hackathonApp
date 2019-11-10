import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaCapimPage } from './busca-capim.page';

describe('BuscaCapimPage', () => {
  let component: BuscaCapimPage;
  let fixture: ComponentFixture<BuscaCapimPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscaCapimPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaCapimPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
