import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogElementPaymentComponent } from '../dialog-element-payment/dialog-element-payment.component';

@Component({
  selector: 'app-shopping-cart-summary',
  templateUrl: './shopping-cart-summary.component.html',
  styleUrls: ['./shopping-cart-summary.component.css']
})
export class ShoppingCartSummaryComponent implements OnInit {

  selectedOption: string | undefined;

  constructor(public dialog: MatDialog) { }


  openDialog() {
    let dialogRef = this.dialog.open(DialogElementPaymentComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
      //console.log()

    });
    location.reload();
  }

  ngOnInit(): void {
  }

}
