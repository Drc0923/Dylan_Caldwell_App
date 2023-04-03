import {Component, Input} from '@angular/core';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {



  @Input() img: string;
  @Input() price: number;
  @Input() rating: number;
  @Input() views: string;
  @Input() dates: string;
  @Input() location: string;
  @Input() locationalt: string;
  @Input() link: string;
  @Input() img2: string;
  @Input() img3: string;


    constructor() {
      this.location = "";
      this.img = "";
      this.price= 0;
      this.rating = 0;
      this.views = "";
      this.dates = "";
      this.locationalt = "";
      this.link = "";
      this.img2 = "";
      this.img3 = "";
    }



}
