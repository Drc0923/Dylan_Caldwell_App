import { Component } from '@angular/core';
import {airbnblistingModel} from "./cards/airbnb-listing.model";
import {Airbnb_data} from "./cards/Airbnb_data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'untitled1';
  listings: airbnblistingModel [] = [];

  constructor() {
    for (var listing of Airbnb_data) {
      console.log(listing);
      this.listings.push(listing);
    }
  }
}
