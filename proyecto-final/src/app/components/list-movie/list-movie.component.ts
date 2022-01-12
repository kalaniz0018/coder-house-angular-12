import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { GetCardResponse } from '../../interfaces/get-card-response.interface';
import { MovieService } from '../../services/movie.services';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.css']
})
export class ListMovieComponent implements OnInit {

  @Input() content: GetCardResponse[] = [];
  movie: any;

  constructor(public movieService: MovieService, public shoppingCartService: ShoppingCartService, public http: HttpClient) { }

  ngOnInit(): void {
  }

  addMovie(movie:GetCardResponse): void {
    console.log('entrando en la funcion addMovie ' + JSON.stringify(movie))
    this.shoppingCartService.addToCart(movie)
  }

/*   addCarrito(peli: PeliculaModel): void {
    this.carritoService.addCarrito(peli)
  } */


}
