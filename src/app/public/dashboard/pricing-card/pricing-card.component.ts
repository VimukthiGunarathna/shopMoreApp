import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProdManagementService } from 'src/app/services/prod-management.service';

// Deault data import
import { prod_pricing_list } from '../../../shared/seed';
@Component({
  selector: 'app-pricing-card',
  templateUrl: './pricing-card.component.html',
  styleUrls: ['./pricing-card.component.scss']
})
export class PricingCardComponent implements OnInit {

  //public productsPrices: any;
  public productsPrices;  
  // = prod_pricing_list; // which holds all the products

  constructor(
    private prodManagementService: ProdManagementService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {

    // Get all the availabe products pricing    
    this.prodManagementService.getAllProductPricing().subscribe(data => {
      this.productsPrices = data;
    });
  }

}
