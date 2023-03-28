import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent {
  @Input() destination: string;

  constructor() {
    this.destination = "";
  }
}
