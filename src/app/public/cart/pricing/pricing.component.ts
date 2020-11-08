import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import { ProdManagementService } from 'src/app/services/prod-management.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {


  public productTotal;
  public orderTotal = 0.00;
  public isCartEmpty = true;
  public cartList = [];
  public isProdTotalAvailable = false;

  constructor(
    private cartService: CartService,
    private prodManagementService: ProdManagementService,
    private orderService: OrderService,
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
    let new_item = {
      prod_id: item.prod_id,
      qty_cartons: item.qty_cartons,
      qty_units: item.qty_units
    }
    this.prodManagementService.getProductPricing(item).subscribe(res => {
      item.total = res;
      this.dispplayTotal(res);
    });
  }

  public orderProducts() {
    const order = [];
    this.cartList.forEach(x => {
      let newOrderItem = {
        prod_id: x.prod_id,
        qty_cartons: x.qty_cartons,
        qty_units: x.qty_units
      }
      order.push(newOrderItem);
    });
    this.orderService.orderProducts(order).subscribe(res => {
      this.orderTotal = res.order_total;
    });
  }

  private dispplayTotal(subtotal){
    this.orderTotal = this.orderTotal + subtotal;
  }

}
