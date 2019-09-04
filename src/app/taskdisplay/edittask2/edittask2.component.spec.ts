import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Edittask2Component } from './edittask2.component';

describe('Edittask2Component', () => {
  let component: Edittask2Component;
  let fixture: ComponentFixture<Edittask2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Edittask2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Edittask2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
