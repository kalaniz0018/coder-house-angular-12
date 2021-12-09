import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/places/services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  total: number = 0;
  

  constructor(public  shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.total = this.shoppingCartService.getTotal();
  }

}
