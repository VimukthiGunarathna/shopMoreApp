import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {


  public qty_units = 0;
  public qty_cartons = 0;
  public products;

  constructor() { }

  ngOnInit(): void {
  }

  incrementOperation(type) {
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
  decrementOperation(type) {
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

}
