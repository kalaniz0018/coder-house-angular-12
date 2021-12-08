import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogElementRegisterComponent } from './dialog-element-register.component';

describe('DialogElementRegisterComponent', () => {
  let component: DialogElementRegisterComponent;
  let fixture: ComponentFixture<DialogElementRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogElementRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogElementRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
