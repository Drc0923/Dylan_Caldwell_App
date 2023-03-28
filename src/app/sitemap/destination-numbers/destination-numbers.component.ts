import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-destination-numbers',
  templateUrl: './destination-numbers.component.html',
  styleUrls: ['./destination-numbers.component.css']
})
export class DestinationNumbersComponent {
  @Input() numberList: string;

  constructor() {
    this.numberList = "";
  }
}
