import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Taskadd2Component } from './taskadd2.component';

describe('Taskadd2Component', () => {
  let component: Taskadd2Component;
  let fixture: ComponentFixture<Taskadd2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Taskadd2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Taskadd2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
