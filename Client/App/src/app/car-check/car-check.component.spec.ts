import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarCheckComponent } from './car-check.component';

describe('CarCheckComponent', () => {
  let component: CarCheckComponent;
  let fixture: ComponentFixture<CarCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
