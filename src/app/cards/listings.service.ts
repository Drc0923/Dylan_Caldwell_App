import { Injectable } from '@angular/core';
import { airbnblistingModel } from './airbnb-listing.model';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { from } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ListingsService {
  constructor(private db: AngularFireDatabase) {}

  getListings(): Observable<airbnblistingModel[]> {
    return this.db.list<airbnblistingModel>('Listings').valueChanges();
  }

  addListing(listing: airbnblistingModel): Promise<void> {
    return this.db.list('Listings').push(listing).then(() => {});
  }
}
