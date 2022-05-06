import { Component, OnInit } from '@angular/core';
import {coupons} from ''

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['../../styles.css', './coupon.component.css']
})
export class CouponComponent implements OnInit {

  coupons: Array<any> = coupons;

  constructor() { }

  ngOnInit(): void {
  }

}
