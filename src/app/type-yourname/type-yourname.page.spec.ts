import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeYournamePage } from './type-yourname.page';

describe('TypeYournamePage', () => {
  let component: TypeYournamePage;
  let fixture: ComponentFixture<TypeYournamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeYournamePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeYournamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
