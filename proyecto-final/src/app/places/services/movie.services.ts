import { Injectable } from '@angular/core';
import { GetCardResponse } from '../interfaces/get-card-response.interface';


@Injectable({
    providedIn: 'root'
})
export class MovieService {

    constructor() {
    }
    getMovie(): GetCardResponse {

        return {
            list: [{
                title: "El  castillo del vagabundo",
                image: "string",
                id: 1,
                description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.",
                year: "1995",
                actors: "lalal, sesese, lololo, lululu, lilili, kakaka",
                price:35
            },
            {
                title: "El viaje de Chihiro",
                image: "string",
                id: 2,
                description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.",
                year: "1995",
                actors: "lalal, sesese, lololo, lululu, lilili, kakaka",
                price:35
            },
            {
                title: "Castillo en el cielo",
                image: "string",
                id: 3,
                description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.",
                year: "1995",
                actors: "lalal, sesese, lololo, lululu, lilili, kakaka",
                price:35
            },
            {
                title: "Ponyo",
                image: "string",
                id: 4,
                description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.",
                year: "1995",
                actors: "lalal, sesese, lololo, lululu, lilili, kakaka",
                price:35
            },
            {
                title: "Sakura",
                image: "string",
                id: 5,
                description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.",
                year: "1995",
                actors: "lalal, sesese, lololo, lululu, lilili, kakaka",
                price:35
            },
            {
                title: "Los fantasmas de Goya",
                image: "string",
                id: 6,
                description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.",
                year: "1995",
                actors: "lalal, sesese, lololo, lululu, lilili, kakaka",
                price:35
            },
            {
                title: "Moliere",
                image: "string",
                id: 7,
                description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.",
                year: "1995",
                actors: "lalal, sesese, lololo, lululu, lilili, kakaka",
                price:35
            },
            {
                title: "Mi vecino Totoro",
                image: "string",
                id: 8,
                description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.",
                year: "1995",
                actors: "lalal, sesese, lololo, lululu, lilili, kakaka",
                price:35
            },
            {
                title: "Mulan",
                image: "string",
                id: 9,
                description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.",
                year: "1995",
                actors: "lalal, sesese, lololo, lululu, lilili, kakaka",
                price:35
            },
            {
                title: "Pocahontas",
                image: "string",
                id: 10,
                description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.",
                year: "1995",
                actors: "lalal, sesese, lololo, lululu, lilili, kakaka",
                price:35
            },
            ]
        }
    }
}

