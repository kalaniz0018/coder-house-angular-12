import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GetUsersResponse } from 'src/app/interfaces/get-users-response.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  inputName?: string;
  inputPassword!: string;
  selectedOption: string | undefined;

  users: GetUsersResponse[] = [];

  userForm = new FormGroup({});

  constructor(public userService: UserService, public router: Router) { }

  validar(users: GetUsersResponse[] = []) {
    console.log('ingregando a la funcion validar')
    for (let user of users) {
      console.log('user')
     if(user.user === this.inputName && user.password === this.inputPassword){
      this.router.navigate(['/home'], { queryParams: { id: user.id } })
     }
    }

  }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),

    })

    this.userService.getUsers().subscribe((response: GetUsersResponse[]) => {
      this.users = response;
    })

  }

}

