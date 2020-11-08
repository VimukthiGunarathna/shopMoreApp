import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProdManagementService } from 'src/app/services/prod-management.service';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

  public products = []; // which holds all the products
  public cartList = [];
  constructor(
    private prodManagementService: ProdManagementService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.cartService.cartList.subscribe(data => {
      //this.cartList = data;
      console.log(data);
    });
    this.prodManagementService.getAllProducts().subscribe(data => {
      this.products = data;
    });
  }

  public addToCart(item) {
    let me = {
      movie_name: 'ss',
      movie_desc: 'sdd',
      available_seats: 'sd',
      time_slots: 'sddds'
    }
    this.products.push(me);
    this.cartService.addProductsToCart(this.products);
  }
}
