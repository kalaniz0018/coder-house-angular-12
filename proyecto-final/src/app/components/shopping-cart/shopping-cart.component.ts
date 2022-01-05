import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  total: number = 0;
  

  constructor(public  shoppingCartService: ShoppingCartService, private router: Router) { }

  ngOnInit(): void {
    this.total = this.shoppingCartService.getTotal();
  }
  onClick() {
    if (this.total > 0) {
      this.router.navigate(['/summary'], {});
    }

  }

}
