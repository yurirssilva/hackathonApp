import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarAreasPage } from './buscar-areas.page';

describe('BuscarAreasPage', () => {
  let component: BuscarAreasPage;
  let fixture: ComponentFixture<BuscarAreasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarAreasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarAreasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
