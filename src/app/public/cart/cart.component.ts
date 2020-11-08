import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public cartList: any;
  public typeOfCard = 'cart'

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.cartService.cartList.subscribe(data => {
      this.cartList = data;
    });
  }

}
