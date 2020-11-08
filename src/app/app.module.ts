import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './shared/top-nav/top-nav.component';
import { DashboardComponent } from './public/dashboard/dashboard.component';
import { CartComponent } from './public/cart/cart.component';
import { PricingCardComponent } from './public/dashboard/pricing-card/pricing-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field'
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMinus, faPlus, faShoppingBag, faSortAmountDownAlt } from '@fortawesome/free-solid-svg-icons';
import { PricingComponent } from './public/cart/pricing/pricing.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { ItemCardComponent } from './shared/item-card/item-card.component';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    DashboardComponent,
    CartComponent,
    ItemCardComponent,
    PricingCardComponent,
    PricingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FontAwesomeModule,
    MatBadgeModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faShoppingBag, faSortAmountDownAlt, faPlus, faMinus);
  }
}
