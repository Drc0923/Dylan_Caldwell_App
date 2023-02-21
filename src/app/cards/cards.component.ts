import {Component, Input} from '@angular/core';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  img: string;
  @Input() price: number;


    constructor() {
      this.img = "";
      this.price= 0;
    }
}
