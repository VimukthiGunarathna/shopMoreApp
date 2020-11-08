import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  public notifications; // notification counter
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.cartService.cartList.subscribe(data => {
      this.notifications = data.length;
      console.log(this.notifications);
    });
  }

}
