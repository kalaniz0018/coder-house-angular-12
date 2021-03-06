import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetCardResponse } from 'src/app/interfaces/get-card-response.interface';
import { GetUsersResponse } from 'src/app/interfaces/get-users-response.interface';
import { MovieService } from 'src/app/services/movie.services';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  content: GetCardResponse[] = [];

  readonly ROOT_URL = 'https://61c0de3733f24c0017823656.mockapi.io/';
  movies: any;
  @Input() user: GetUsersResponse[] = [];

  constructor(public movieService: MovieService, public http: HttpClient) { }
  getPost() { this.movies = this.http.get(this.ROOT_URL + 'movies'); }


  ngOnInit(): void {
    this.getDataSeccion();
  }


  getDataSeccion() {
    this.movieService.getMovie().subscribe(data => {
      console.log(data);
      this.content = data
    });

  }
}
