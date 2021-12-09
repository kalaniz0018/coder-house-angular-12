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
    }
}

