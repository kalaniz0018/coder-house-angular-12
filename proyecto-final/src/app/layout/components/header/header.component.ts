import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetUsersResponse } from 'src/app/places/interfaces/get-users-response.interface';
import { UserService } from 'src/app/places/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  id: string | undefined;
  isAdmin: boolean | undefined;
  user: GetUsersResponse | undefined;

  constructor( private route: ActivatedRoute, public userService: UserService) { }

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
