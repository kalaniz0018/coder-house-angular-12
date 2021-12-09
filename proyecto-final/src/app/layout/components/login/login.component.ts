import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  inputName?: string;
  inputPassword!: string;

 
  selectedOption: string | undefined;

  userForm = new FormGroup({});

  constructor() {}

 

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),

    })
  }


}
