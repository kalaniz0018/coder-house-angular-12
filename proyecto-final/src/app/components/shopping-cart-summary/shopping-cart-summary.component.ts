import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GetCardResponse } from 'src/app/interfaces/get-card-response.interface';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { DialogElementPaymentComponent } from '../dialog-element-payment/dialog-element-payment.component';

@Component({
  selector: 'app-shopping-cart-summary',
  templateUrl: './shopping-cart-summary.component.html',
  styleUrls: ['./shopping-cart-summary.component.css']
})
export class ShoppingCartSummaryComponent implements OnInit {

  selectedOption: string | undefined;
  movies: Array<GetCardResponse> | undefined;
  totalCarrito: number | undefined;

  constructor(public dialog: MatDialog, public shoppingCartService: ShoppingCartService) { }


  openDialog() {
    let dialogRef = this.dialog.open(DialogElementPaymentComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
      //console.log()

    });
    location.reload();
  }

  ngOnInit(): void {
    this.movies = this.shoppingCartService.getItems()
    this.totalCarrito = this.shoppingCartService.totalElement()
  }





}
