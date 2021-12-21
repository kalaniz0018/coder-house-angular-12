import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetCardResponse } from '../interfaces/get-card-response.interface';


@Injectable({
    providedIn: 'root'
})
export class MovieService {

    private urlAPI = 'https://61c0de3733f24c0017823656.mockapi.io/';
    constructor(private http: HttpClient) {}
    
    getMovie(): Observable<GetCardResponse[]> {
            return this.http.get<GetCardResponse[]>(this.urlAPI + "movies");
    }
   
    

    
  /*  getMovie(): GetCardResponse {

        return {
            list: [{
                title: "300",
                image: "../../../../assets/images/esparta.jpg",       
                id: 1,
                description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.",
                year: "1995",
                actors: "lalal, sesese, lololo, lululu, lilili, kakaka",
                price:35
            },
            {
                title: "Howl's moving castle",
                image: "../../../../assets/images/howls-moving-castle.jpg",
                id: 2,
                description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.",
                year: "1995",
                actors: "lalal, sesese, lololo, lululu, lilili, kakaka",
                price:35
            },
            {
                title: "Los coristas",
                image: "../../../../assets/images/les-choristes.jpg",
                id: 3,
                description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.",
                year: "1995",
                actors: "lalal, sesese, lololo, lululu, lilili, kakaka",
                price:35
            },
            {
                title: "Los fantasmas de Goya",
                image: "../../../../assets/images/los-fantasmas-de-goya.jpg",
                id: 4,
                description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.",
                year: "1995",
                actors: "lalal, sesese, lololo, lululu, lilili, kakaka",
                price:35
            },
            {
                title: "Mi vecino Totoro",
                image: "../../../../assets/images/mi-vecino-totoro.jpg",
                id: 5,
                description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.",
                year: "1995",
                actors: "lalal, sesese, lololo, lululu, lilili, kakaka",
                price:35
            },
            {
                title: "Moliere",
                image: "../../../../assets/images/moliere.png",
                id: 6,
                description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.",
                year: "1995",
                actors: "lalal, sesese, lololo, lululu, lilili, kakaka",
                price:35
            },
            {
                title: "Mulan",
                image: "../../../../assets/images/mulan.jpg",
                id: 7,
                description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.",
                year: "1995",
                actors: "lalal, sesese, lololo, lululu, lilili, kakaka",
                price:35
            },
            {
                title: "Pocahontas",
                image: "../../../../assets/images/pocahontas.png",
                id: 8,
                description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.",
                year: "1995",
                actors: "lalal, sesese, lololo, lululu, lilili, kakaka",
                price:35
            },
            {
                title: "Ponyo",
                image: "../../../../assets/images/ponyo.jpg",
                id: 9,
                description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.",
                year: "1995",
                actors: "lalal, sesese, lololo, lululu, lilili, kakaka",
                price:35
            },
            {
                title: "V de venganza",
                image: "../../../../assets/images/V.jpg",
                id: 10,
                description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.",
                year: "1995",
                actors: "lalal, sesese, lololo, lululu, lilili, kakaka",
                price:35
            },
            ]
        }
    } */
}

