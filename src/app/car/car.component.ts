import { Component, OnInit, ViewChild } from '@angular/core';
import { AdvertisementComponent } from '../advertisement/advertisement.component';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  myDate = Date.now();

  welcome = 'Date create:';
  name: string;
  model: string;
  speed: number;
  colors: Colors;
  options: string[];
  money: number;
  isEdit = false;

  @ViewChild(AdvertisementComponent, { static: false }) advertisement: AdvertisementComponent;

  constructor() { }

  ngOnInit() {
    this.name = 'Audi';
    this.model = 'PRS8';
    this.speed = 300;
    this.money = 64000;
    this.colors = {
      car: 'blue',
      salon: 'black',
      wheels: 'silver'
    };
    this.options = ['ABS', 'Autopilot', 'Parking'];
  }

  addOpt(option: string) {
    this.options.unshift(option);
  }

  showEdit() {
    this.isEdit = !this.isEdit;
  }

  carSelect(carName: string) {
    if (carName === 'bmw') {
    this.name = 'BMW';
    this.model = 'M5';
    this.speed = 280;
    this.money = 60000;
    this.colors = {
      car: 'green',
      salon: 'white',
      wheels: 'black'
    };
    this.options = ['ABS', 'Autopilot', 'Parking'];
  } else if (carName === 'audi') {
    this.name = 'Audi';
    this.model = 'PRS8';
    this.speed = 300;
    this.money = 64000;
    this.colors = {
      car: 'blue',
      salon: 'black',
      wheels: 'silver'
    };
    this.options = ['ABS', 'Autopilot', 'Parking'];
  } else {
    this.name = 'Mercedes';
    this.model = 'C5';
    this.speed = 378;
    this.money = 67000;
    this.colors = {
      car: 'blue',
      salon: 'black',
      wheels: 'silver'
    };
    this.options = ['ABS', 'Autopilot', 'Parking'];
  }
}

}

interface Colors {
  car: string;
  salon: string;
  wheels: string;
}
