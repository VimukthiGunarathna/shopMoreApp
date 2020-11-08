import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {


  public qty_units = 0;
  public qty_cartons = 0;
  public products;
  public isCartEmpty = true;
  public cartList = [];

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {

    this.cartService.cartList.subscribe(data => {
      this.cartList = data;
      this.isCartEmpty = false;
    });
  }

  /**
   * Adding units or cartons to order
   * @param type : type of the increment (Units /Cartons)
   */
  public incrementOperation(type) {
    if (type == "carton") {
      if (this.qty_cartons >= 0) {
        this.qty_cartons++;
      }
    } else {
      if (this.qty_units >= 0) {
        this.qty_units++;
      }
    }
  }

  /**
   * Reducing units or cartons to order
   * @param type : type of the decrement (Units /Cartons)
   */
  public decrementOperation(type) {
    if (type == "carton") {
      if (this.qty_cartons > 0) {
        this.qty_cartons--;
      }
    } else {
      if (this.qty_units > 0) {
        this.qty_units--;
      }
    }
  }

  public getPricing(item){

  }

}
