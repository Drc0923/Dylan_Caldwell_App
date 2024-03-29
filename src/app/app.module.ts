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
import { SitemapComponent } from './sitemap/sitemap.component';
import { SitemapTopNavbarComponent } from './sitemap/sitemap-top-navbar/sitemap-top-navbar.component';
import { SitemapSettingsComponent } from './sitemap/sitemap-settings/sitemap-settings.component';
import { DestinationsComponent } from './sitemap/destinations/destinations.component';
import { DestinationNumbersComponent } from './sitemap/destination-numbers/destination-numbers.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { PrivacyNavbarComponent } from './privacy/privacy-navbar/privacy-navbar.component';
import {HttpClientModule} from "@angular/common/http";
import {UserInfoComponent} from "./user-info.component";
import { AddListingComponent } from './cards/add-listing/add-listing.component';
import {FormsModule} from "@angular/forms";
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from '../environments/environment';
import { AuthComponent } from './auth/auth.component';
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
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
    SitemapComponent,
    SitemapTopNavbarComponent,
    SitemapSettingsComponent,
    DestinationsComponent,
    DestinationNumbersComponent,
    PrivacyComponent,
    PrivacyNavbarComponent,
    UserInfoComponent,
    AddListingComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
