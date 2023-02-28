import {Component, Input} from '@angular/core';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  slides: any[] = new Array(3).fill({id: -1, src:'', title: '', subtitle: ''})

  @Input() img: string;
  @Input() price: number;
  @Input() rating: number;
  @Input() views: string;
  @Input() dates: string;
  @Input() location: string;
  @Input() locationalt: string;
  @Input() link: string;


    constructor() {
      this.location = "";
      this.img = "";
      this.price= 0;
      this.rating = 0;
      this.views = "";
      this.dates = "";
      this.locationalt = "";
      this.link = "";
    }

    ngOnInit(): void {
      this.slides[0] = {
        src: './assets/img/angular.jpg',
      };
      this.slides[1] = {
        src: './assets/img/react.jpg',
      }
      this.slides[2] = {
        src: './assets/img/vue.jpg',
      }
    }
}
