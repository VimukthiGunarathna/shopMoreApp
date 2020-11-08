import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItem = [];

  // Observable sources
  private cartListSource = new ReplaySubject<any>();

  // Observable streams
  cartList = this.cartListSource.asObservable();
  constructor() { }

  public addProductsToCart(items) {
    this.cartListSource.next(items);
  }

}
