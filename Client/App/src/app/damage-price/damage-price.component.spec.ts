import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DamagePriceComponent } from './damage-price.component';

describe('DamagePriceComponent', () => {
  let component: DamagePriceComponent;
  let fixture: ComponentFixture<DamagePriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DamagePriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DamagePriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
