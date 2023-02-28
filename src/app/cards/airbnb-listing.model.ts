export class airbnblistingModel {
  img: string;
  price: number;
  rating: number;
  views: string;
  dates: string;
  location: string;
  locationalt: string;


  constructor(img: string, price: number, rating: number,
              views: string, dates: string, location: string, locationalt: string,) {
    this.img = img;
    this.price = price;
    this.rating = rating;
    this.views = views;
    this.dates = dates;
    this.location = location;
    this.locationalt = locationalt;

  }
}
