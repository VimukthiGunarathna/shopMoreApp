import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './public/cart/cart.component';
import { DashboardComponent } from './public/dashboard/dashboard.component';

const routes: Routes = [
  { path: '',redirectTo:'dashboard', pathMatch:'full' },
  { path: 'dashboard',component: DashboardComponent },
  { path: 'cart',component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
