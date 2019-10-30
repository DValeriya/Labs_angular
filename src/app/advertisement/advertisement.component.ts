import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.scss']
})
export class AdvertisementComponent implements OnInit {
  isHide = false;

  constructor() { }

  ngOnInit() {
  }

  hide() {
    this.isHide = !this.isHide;
  }
}
