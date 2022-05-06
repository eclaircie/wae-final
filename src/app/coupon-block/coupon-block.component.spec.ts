import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponBlockComponent } from './coupon-block.component';

describe('CouponBlockComponent', () => {
  let component: CouponBlockComponent;
  let fixture: ComponentFixture<CouponBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouponBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
