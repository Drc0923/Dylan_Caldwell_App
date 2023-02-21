import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
 @Input() img: string;
 @Input() rating: number;
 @Input() views: number;
 @Input() dates: string;
 @Input() price: number;

  constructor() {
    this.img = "";
    this.rating = 0;
    this.views = 0;
    this.dates = "Missing Dates";
    this.price = 0;

  }
}
