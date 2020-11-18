import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendDocumentsComponent } from './send-documents.component';

describe('SendDocumentsComponent', () => {
  let component: SendDocumentsComponent;
  let fixture: ComponentFixture<SendDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
