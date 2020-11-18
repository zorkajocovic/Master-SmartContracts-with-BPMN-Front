import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadDocumentsComponent } from './read-documents.component';

describe('ReadDocumentsComponent', () => {
  let component: ReadDocumentsComponent;
  let fixture: ComponentFixture<ReadDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
