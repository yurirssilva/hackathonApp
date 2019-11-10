import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LancamentosAreaPage } from './lancamentos-area.page';

describe('LancamentosAreaPage', () => {
  let component: LancamentosAreaPage;
  let fixture: ComponentFixture<LancamentosAreaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LancamentosAreaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LancamentosAreaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
