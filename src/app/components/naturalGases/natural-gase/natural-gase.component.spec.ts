import { ComponentFixture, TestBed } from '@angular/core/testing';
/* tslint:disable:no-unused-variable */

import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';



import { NaturalGaseComponent } from './natural-gase.component';

describe('NaturalGaseComponent', () => {
  let component: NaturalGaseComponent;
  let fixture: ComponentFixture<NaturalGaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaturalGaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NaturalGaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
