import { Component, Input, OnInit } from '@angular/core';
import { GetCardResponse } from '../../interfaces/get-card-response.interface';
import { MovieService } from '../../services/movie.services';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.css']
})
export class ListMovieComponent implements OnInit {

  @Input() content: GetCardResponse | undefined;

  constructor(public movieService: MovieService) { }

  ngOnInit(): void {
  }

}
