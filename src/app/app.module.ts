import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './shared/top-nav/top-nav.component';
import { DashboardComponent } from './public/dashboard/dashboard.component';
import { CartComponent } from './public/cart/cart.component';
import { ItemCardComponent } from './public/dashboard/item-card/item-card.component';
import { PricingCardComponent } from './public/dashboard/pricing-card/pricing-card.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
