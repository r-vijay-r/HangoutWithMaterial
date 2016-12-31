/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HangHereComponent } from './hang-here.component';

describe('HangHereComponent', () => {
  let component: HangHereComponent;
  let fixture: ComponentFixture<HangHereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HangHereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HangHereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
