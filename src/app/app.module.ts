import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './shared/top-nav/top-nav.component';
import { DashboardComponent } from './public/dashboard/dashboard.component';
import { CartComponent } from './public/cart/cart.component';
import { ItemCardComponent } from './public/dashboard/item-card/item-card.component';
import { PricingCardComponent } from './public/dashboard/pricing-card/pricing-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field'
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    DashboardComponent,
    CartComponent,
    ItemCardComponent,
    PricingCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faShoppingBag);
  }
}
