import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {BottomNavbarLayoutComponent} from "./bottom-navbar/Bottom-navbar-layout.component";
import {TermLayoutComponent} from "./bottom-navbar/term-layout.component";
import {SitemapLayoutComponent} from "./bottom-navbar/sitemap-layout.component";
import {PrivacyLayoutComponent} from "./bottom-navbar/privacy-layout.component";
import {YourPrivacyChoicesComponent} from "./bottom-navbar/your-privacy-choices.component";
import {DestinationsLayoutComponent} from "./bottom-navbar/destinations-layout.component";
import {TermsComponent} from "./terms/terms.component";
import {HomeLayoutComponent} from "./home-layout/home-layout.component";
import {SitemapComponent} from "./sitemap/sitemap.component";
import {PrivacyComponent} from "./privacy/privacy.component";
import {AddListingComponent} from "./cards/add-listing/add-listing.component";

const routes:Routes = [
  {path: '', component: HomeLayoutComponent},
  {path: 'bottom-navbar', component: BottomNavbarLayoutComponent},
  {path: 'term', component: TermLayoutComponent},
  {path: 'sitemap', component: SitemapComponent},
  {path: 'privacy', component: PrivacyComponent},
  {path: 'your-privacy-choices', component: YourPrivacyChoicesComponent},
  {path: 'destinations', component: DestinationsLayoutComponent},
  {path: 'terms', component: TermsComponent},
  {path: 'home', component: HomeLayoutComponent},
  {path: 'admin', component: AddListingComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
