import { Component,} from '@angular/core';
import {SitemapSettingsModel} from "./sitemap-settings/sitemap-settings.model";
import {sitemapSettingsData} from "./sitemap-settings/sitemap-settings-data";
import {DestinationsModel} from "./destinations/destinations.model";
import {destinationsData} from "./destinations/destinations-data";
import {destinationNumbersModule} from "./destination-numbers/destination-numbers.model";
import {destinationNumbersData} from "./destination-numbers/destination-numbers-data";

@Component({
  selector: 'app-sitemap',
  templateUrl: './sitemap.component.html',
  styleUrls: ['./sitemap.component.css']
})
export class SitemapComponent {
  destinations: DestinationsModel[] = [];
  settings: SitemapSettingsModel[] = [];
  numberLists: destinationNumbersModule[] = [];
  constructor() {
    for (var setting of sitemapSettingsData) {
      console.log(setting);
      this.settings.push(setting);
    }
    for (var destination of destinationsData) {
      console.log(destination);
      this.destinations.push(destination);
    }
    for (var numberList of destinationNumbersData) {
      console.log(numberList);
      this.numberLists.push(numberList);
    }
  }
}
