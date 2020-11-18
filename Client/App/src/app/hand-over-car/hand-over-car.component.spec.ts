import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandOverCarComponent } from './hand-over-car.component';

describe('HandOverCarComponent', () => {
  let component: HandOverCarComponent;
  let fixture: ComponentFixture<HandOverCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandOverCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandOverCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
