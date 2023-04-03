import {HttpClient} from "@angular/common/http";
import {airbnblistingModel} from "./airbnb-listing.model";
import {Injectable} from "@angular/core";

@Injectable(
  {providedIn: 'root'}
)

export class ListingsService {
  private  baseUrl:string = "https://airbnb-app-4478a-default-rtdb.firebaseio.com/Listings";
  private listingsData:string = ".json";

  constructor(private http: HttpClient) {

  }

  getListings() {
    return this.http.get<airbnblistingModel []>(this.baseUrl + this.listingsData);
  }
}
