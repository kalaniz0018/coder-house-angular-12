import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogElementPaymentComponent } from './dialog-element-payment.component';

describe('DialogElementPaymentComponent', () => {
  let component: DialogElementPaymentComponent;
  let fixture: ComponentFixture<DialogElementPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogElementPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogElementPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
