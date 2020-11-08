import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { CartService } from 'src/app/services/cart.service';
import { ProdManagementService } from 'src/app/services/prod-management.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {


  public productTotal;
  public isCartEmpty = true;
  public cartList = [];
  public isProdTotalAvailable = false;

  constructor(
    private cartService: CartService,
    private prodManagementService: ProdManagementService
  ) { }

  ngOnInit(): void {

    this.cartService.cartList.subscribe(data => {
      this.isCartEmpty = false;
      this.cartList = data;
    });
  }

  /**
   * Adding units or cartons to order
   * @param type : type of the increment (Units /Cartons)
   */
  public incrementOperation(item: any, type: string) {
    if (type == "carton") {
      if (item.qty_cartons >= 0) {
        item.qty_cartons++;
      }
    } else {
      if (item.qty_units >= 0) {
        item.qty_units++;
      }
    }
  }

  /**
   * Reducing units or cartons to order
   * @param type : type of the decrement (Units /Cartons)
   */
  public decrementOperation(item: any, type: string) {
    if (type == "carton") {
      if (item.qty_cartons > 0) {
        item.qty_cartons--;
      }
    } else {
      if (item.qty_units > 0) {
        item.qty_units--;
      }
    }
  }

  public getPricing(item) {
    this.prodManagementService.getProductPricings().subscribe(res => {
      this.productTotal = res;
      this.isProdTotalAvailable = true;
    },error =>{
      console.log(error,'hey');
      this.productTotal = 17800;
      this.isProdTotalAvailable = true;
    });
  }

}
