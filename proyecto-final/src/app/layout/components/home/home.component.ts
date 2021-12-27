import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetUsersResponse } from 'src/app/places/interfaces/get-users-response.interface';
import { UserService } from 'src/app/places/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: GetUsersResponse | undefined;
  readonly ROOT_URL = 'https://61c0de3733f24c0017823656.mockapi.io/';
  id: string | undefined;
  isAdmin: boolean | undefined;

  constructor(public userService: UserService, public http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      this.getDataSeccion();
    });
  }


  getDataSeccion() {
    this.userService.getUser(this.id).subscribe(user => {
      this.user = user;
      this.isAdmin = this.user.rol === 'ROL_ADMIN';
    });
  }

}
