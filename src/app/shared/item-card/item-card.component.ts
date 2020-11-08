import { Component, Input, OnInit } from '@angular/core';
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

  @Input() type;
  public products = prod_list; // which holds all the products
  public cartList = [];
  public addToCartList = [];
  public isCart = false;
  public isCartEmpty = true;

  constructor(
    private prodManagementService: ProdManagementService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    if (this.type == 'cart') {
      this.isCart = true;
    }

    this.cartService.cartList.subscribe(data => {
      console.log(data.length);
      this.addToCartList = data;
      this.isCartEmpty = false
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
    this.addToCartList.push(item);
    this.cartService.addProductsToCart(this.addToCartList);
  }
}
