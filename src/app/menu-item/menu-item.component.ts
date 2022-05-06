import { Component, OnInit } from '@angular/core';
import { menuitems } from '../data/menu-items';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  menuitems: Array<any> = menuitems;

  constructor() { }

  ngOnInit(): void {
  }

}
