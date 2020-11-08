import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProdManagementService } from 'src/app/services/prod-management.service';

// Deault data import
import { prod_list } from '../seed';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

  public products = prod_list; // which holds all the products
  public cartList = [];
  public addToCartList = [];

  constructor(
    private prodManagementService: ProdManagementService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.cartService.cartList.subscribe(data => {
      console.log(data);
    });

    // Get all the availabe products
    this.prodManagementService.getAllProducts().subscribe(data => {
      this.products = data;
    });
  }

  /**
   * Adding selected products to user cart
   * @param item : selected product by user
   */
  public addToCart(item) {
    let me = {
      prod_name: 'ss',
      prod_desc: 'sdd',
      carton_price: 'sd',
      unit_price: 'sddds'
    }
    this.addToCartList.push(me);
    this.cartService.addProductsToCart(this.addToCartList);
  }
}
