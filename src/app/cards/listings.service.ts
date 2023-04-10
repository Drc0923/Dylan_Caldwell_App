import {HttpClient} from "@angular/common/http";
import {airbnblistingModel} from "./airbnb-listing.model";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable(
  {providedIn: 'root'}
)

export class ListingsService {
  constructor(private http: HttpClient) {}


  private  baseUrl:string = "https://airbnb-app-4478a-default-rtdb.firebaseio.com/Listings";
  private listingsData:string = ".json";


  getListings() {
    return this.http.get<{[key: string]: airbnblistingModel}>(this.baseUrl + this.listingsData);
  }
}
