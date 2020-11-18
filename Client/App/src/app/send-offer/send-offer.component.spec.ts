import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendOfferComponent } from './send-offer.component';

describe('SendOfferComponent', () => {
  let component: SendOfferComponent;
  let fixture: ComponentFixture<SendOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
