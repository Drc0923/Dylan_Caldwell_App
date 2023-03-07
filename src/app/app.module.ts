import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopNavBarComponent } from './Navigation/top-nav-bar/top-nav-bar.component';
import { CardsComponent } from './cards/cards.component';
import { BottomNavbarComponent } from './bottom-navbar/bottom-navbar.component';
import { TotalPriceComponentComponent } from './total-price-component/total-price-component.component';
import { TermsComponent } from './terms/terms.component';
import { AppRoutingModule } from './app-routing.module';
import {BottomNavbarLayoutComponent} from "./bottom-navbar/Bottom-navbar-layout.component";
import {TermLayoutComponent} from "./bottom-navbar/term-layout.component";
import {PrivacyLayoutComponent} from "./bottom-navbar/privacy-layout.component";
import {YourPrivacyChoicesComponent} from "./bottom-navbar/your-privacy-choices.component";
import {DestinationsLayoutComponent} from "./bottom-navbar/destinations-layout.component";
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import {SitemapLayoutComponent} from "./bottom-navbar/sitemap-layout.component";


@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    CardsComponent,
    BottomNavbarComponent,
    TotalPriceComponentComponent,
    TermsComponent,
    BottomNavbarLayoutComponent,
    TermLayoutComponent,
    PrivacyLayoutComponent,
    YourPrivacyChoicesComponent,
    DestinationsLayoutComponent,
    HomeLayoutComponent,
    SitemapLayoutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
