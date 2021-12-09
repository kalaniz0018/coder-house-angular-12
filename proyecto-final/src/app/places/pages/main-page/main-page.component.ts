import { Component, OnInit } from '@angular/core';
import { GetCardResponse } from '../../interfaces/get-card-response.interface';
import { MovieService } from '../../services/movie.services';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  content: GetCardResponse | undefined;

  constructor(public movieService: MovieService) { }

  ngOnInit(): void {
    this.getDataSeccion();
  }

  getDataSeccion() {
    this.content = this.movieService.getMovie()

  }
}
