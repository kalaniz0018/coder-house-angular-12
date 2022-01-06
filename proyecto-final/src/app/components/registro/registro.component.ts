import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogElementRegisterComponent } from 'src/app/components/dialog-element-register/dialog-element-register.component';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GetUsersResponse } from 'src/app/interfaces/get-users-response.interface';

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

  register: GetUsersResponse | undefined;

  userForm = new FormGroup({});

  readonly ROOT_URL = 'https://61c0de3733f24c0017823656.mockapi.io/users';

  constructor(public dialog: MatDialog, public http: HttpClient) { }


  openDialog() {
    let dialogRef = this.dialog.open(DialogElementRegisterComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
      //console.log()

    });
    location.reload();
  }

  userRegistration(register: GetUsersResponse | undefined) {
    console.log('entro la funcion register')
    this.http.post<GetUsersResponse>(this.ROOT_URL, register).subscribe(result => {
      console.log(result)

    });
  }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email, Validators.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}")]),
      phone: new FormControl(null, [Validators.required, Validators.pattern('[0-9]+')]),
      password: new FormControl(null, Validators.required),
    })
  }


}
