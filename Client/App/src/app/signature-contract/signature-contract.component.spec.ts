import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignatureContractComponent } from './signature-contract.component';

describe('SignatureContractComponent', () => {
  let component: SignatureContractComponent;
  let fixture: ComponentFixture<SignatureContractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignatureContractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignatureContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
