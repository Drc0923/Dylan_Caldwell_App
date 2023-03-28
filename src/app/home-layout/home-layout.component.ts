import { Component } from '@angular/core';
import {airbnblistingModel} from "../cards/airbnb-listing.model";
import {Airbnb_data} from "../cards/Airbnb_data";

@Component({
  selector: 'fm-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent {
  listings: airbnblistingModel [] = [];

  constructor() {
    for (var listing of Airbnb_data) {
      console.log(listing);
      this.listings.push(listing);
    }
  }
}
