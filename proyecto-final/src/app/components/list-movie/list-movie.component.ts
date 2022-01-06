import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { GetCardResponse } from '../../interfaces/get-card-response.interface';
import { MovieService } from '../../services/movie.services';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.css']
})
export class ListMovieComponent implements OnInit {

  @Input() content: GetCardResponse[] = [];
  readonly ROOT_URL = 'https://61c0de3733f24c0017823656.mockapi.io/';
  movie: any;

  constructor(public movieService: MovieService, public http: HttpClient) { }
  getPost() { this.movie = this.http.get(this.ROOT_URL + 'movie'); }

  ngOnInit(): void {
  }

}
