import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadOfferComponent } from './read-offer.component';

describe('ReadOfferComponent', () => {
  let component: ReadOfferComponent;
  let fixture: ComponentFixture<ReadOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
