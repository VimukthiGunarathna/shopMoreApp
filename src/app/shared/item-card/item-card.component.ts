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
  public products = []; // which holds all the products
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
      this.addToCartList = data;
      this.isCartEmpty = false
    });

    // Get all the availabe products
    this.prodManagementService.getAllProducts().subscribe(data => {
      const products_temp = data;
      this.prodManagementService.getAllCartonPrice().subscribe(data => {
        const cartons_temp = data;
        products_temp.forEach(x => {
          cartons_temp.forEach(y => {
            if (x.prod_id == y.carton_id) {
              let item = {
                prod_id: x.prod_id,
                prod_name: x.prod_name,
                prod_desc: x.prod_desc,
                carton_price: y.carton_price
              }
              this.products.push(item);
            }
          });
        });
      });
    });
  }

  /**
   * Adding selected products to user cart
   * @param item : selected product by user
   */
  public addToCart(item) {
    let newItem = {
      prod_id: item.prod_id,
      prod_name: item.prod_name,
      prod_desc: item.prod_desc,
      carton_price: item.carton_price,
      qty_cartons: 0,
      qty_units: 0,
      total:''
    }
    this.addToCartList.push(newItem);
    this.cartService.addProductsToCart(this.addToCartList);
  }
}
