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
                id: "string",
                description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.",
                year: "1995",
                actors: "lalal, sesese, lololo, lululu, lilili, kakaka"
            },
            {
                title: "El viaje de Chihiro",
                image: "string",
                id: "string",
                description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.",
                year: "1995",
                actors: "lalal, sesese, lololo, lululu, lilili, kakaka"
            },
            {
                title: "Castillo en el cielo",
                image: "string",
                id: "string",
                description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.",
                year: "1995",
                actors: "lalal, sesese, lololo, lululu, lilili, kakaka"
            },
            {
                title: "Ponyo",
                image: "string",
                id: "string",
                description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.",
                year: "1995",
                actors: "lalal, sesese, lololo, lululu, lilili, kakaka"
            },
            {
                title: "Sakura",
                image: "string",
                id: "string",
                description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.",
                year: "1995",
                actors: "lalal, sesese, lololo, lululu, lilili, kakaka"
            },
            {
                title: "Los fantasmas de Goya",
                image: "string",
                id: "string",
                description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.",
                year: "1995",
                actors: "lalal, sesese, lololo, lululu, lilili, kakaka"
            },
            {
                title: "Moliere",
                image: "string",
                id: "string",
                description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.",
                year: "1995",
                actors: "lalal, sesese, lololo, lululu, lilili, kakaka"
            },
            {
                title: "Mi vecino Totoro",
                image: "string",
                id: "string",
                description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.",
                year: "1995",
                actors: "lalal, sesese, lololo, lululu, lilili, kakaka"
            },
            {
                title: "Mulan",
                image: "string",
                id: "string",
                description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.",
                year: "1995",
                actors: "lalal, sesese, lololo, lululu, lilili, kakaka"
            },
            {
                title: "Pocahontas",
                image: "string",
                id: "string",
                description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.",
                year: "1995",
                actors: "lalal, sesese, lololo, lululu, lilili, kakaka"
            },
            ]
        }
    }
}

