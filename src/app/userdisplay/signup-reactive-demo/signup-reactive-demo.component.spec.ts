import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupReactiveDemoComponent } from './signup-reactive-demo.component';

describe('SignupReactiveDemoComponent', () => {
  let component: SignupReactiveDemoComponent;
  let fixture: ComponentFixture<SignupReactiveDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupReactiveDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupReactiveDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
