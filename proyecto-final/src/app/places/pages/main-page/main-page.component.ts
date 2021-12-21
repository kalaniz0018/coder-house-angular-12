import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetCardResponse } from '../../interfaces/get-card-response.interface';
import { MovieService } from '../../services/movie.services';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  content: any//Observable<GetCardResponse[]> = [];
  
  readonly ROOT_URL = 'https://61c0de3733f24c0017823656.mockapi.io/';
  users: any;

  constructor(public movieService: MovieService, public http: HttpClient) { }
  getPost() { this.users = this.http.get(this.ROOT_URL + 'users'); }


  ngOnInit(): void {
    this.getDataSeccion();
  }


  getDataSeccion() {
    this.content = this.movieService.getMovie().subscribe((data) => (console.log(data)));

  }
}
