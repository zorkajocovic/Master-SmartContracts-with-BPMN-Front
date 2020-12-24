import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadyCarComponent } from './ready-car.component';

describe('ReadyCarComponent', () => {
  let component: ReadyCarComponent;
  let fixture: ComponentFixture<ReadyCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadyCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadyCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
