import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopNavBarComponent } from './Navigation/top-nav-bar/top-nav-bar.component';
import { CardsComponent } from './cards/cards.component';
import { BottomNavbarComponent } from './bottom-navbar/bottom-navbar.component';
import { TotalPriceComponentComponent } from './total-price-component/total-price-component.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    CardsComponent,
    BottomNavbarComponent,
    TotalPriceComponentComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
