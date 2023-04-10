import { Component, OnInit } from '@angular/core';
import {airbnblistingModel} from "../cards/airbnb-listing.model";
import {Airbnb_data} from "../cards/Airbnb_data";
import {ListingsService} from "../cards/listings.service";

@Component({
  selector: 'fm-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent  implements OnInit {
  listings: airbnblistingModel [] = [];

  constructor(private listingsService: ListingsService) {
  }

  ngOnInit(): void {
    this.listingsService.getListings().subscribe((listingsData: { [key: string]: airbnblistingModel }) => {
      console.log("Fetching listings from the server");
      const listings = Object.values(listingsData);
      for (var listing of listings) {
        console.log(listing);
        this.listings.push(listing);
      }
    });
  }
}
