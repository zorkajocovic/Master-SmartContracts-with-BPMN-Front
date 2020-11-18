import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendReceiptComponent } from './send-receipt.component';

describe('SendReceiptComponent', () => {
  let component: SendReceiptComponent;
  let fixture: ComponentFixture<SendReceiptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendReceiptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
