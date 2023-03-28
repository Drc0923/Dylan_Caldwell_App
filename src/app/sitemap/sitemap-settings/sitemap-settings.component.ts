import {Component, Input} from '@angular/core';


@Component({
  selector: 'app-sitemap-settings',
  templateUrl: './sitemap-settings.component.html',
  styleUrls: ['./sitemap-settings.component.css']
})
export class SitemapSettingsComponent {

    @Input() setting: string;

    constructor() {
      this.setting = "";
    }

  }

