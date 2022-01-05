import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogElementRegisterComponent } from 'src/app/components/dialog-element-register/dialog-element-register.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  inputName!: string;
  inputSurName!: string;
  inputEmail!: string;
  inputPhone!: number;
  inputPassword!: string;


  selectedOption: string | undefined;

  userForm = new FormGroup({});

  constructor(public dialog: MatDialog) { }


  openDialog() {
    let dialogRef = this.dialog.open(DialogElementRegisterComponent);
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
      password: new FormControl(null, Validators.required),
    })
  }


}
