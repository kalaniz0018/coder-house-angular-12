import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { DialogElementsComponent } from '../dialog-elements/dialog-elements.component';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  inputName?: string;
  inputSurName?: string;
  inputEmail?: string;
  inputPhone?: number;

 
  selectedOption: string | undefined;

  userForm = new FormGroup({});

  constructor(public dialog: MatDialog) {}

  openDialog() {
    let dialogRef = this.dialog.open(DialogElementsComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
      //console.log()
      
    });
    location.reload();
  }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      surname: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email, Validators.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}")]),
      phone: new FormControl(null, [Validators.required, Validators.pattern('[0-9]+')]),
    })
  }





}
