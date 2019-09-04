import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdituserreactiveComponent } from './edituserreactive.component';

describe('EdituserreactiveComponent', () => {
  let component: EdituserreactiveComponent;
  let fixture: ComponentFixture<EdituserreactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdituserreactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdituserreactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
