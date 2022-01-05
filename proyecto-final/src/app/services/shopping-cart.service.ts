import { Injectable } from '@angular/core';
import { GetCardResponse } from '../interfaces/get-card-response.interface';

@Injectable({
    providedIn: 'root'
})
export class ShoppingCartService {

    constructor() { }

 /*    getItems(): Array<GetCardResponse> {
        return []//JSON.parse(localStorage.getItems('cart_items')) ?? [];
    } */ 

    getTotal() {
        return 4//this.getItems().length;
    }

  /*    addToCart(item: GetCardResponse) {
        let items: Array<GetCardResponse> = this.getItems()
        items.push(item);
        this.saveCart(items);
    } */
/* 
    removeFromCart(item: GetCardResponse): Array<GetCardResponse> {
        let items: Array<GetCardResponse> = this.getItems()
        const index = items.findIndex((o) => o.title === item.title);

        if (index > -1) {
            items.splice(index, 1);
            this.saveCart(items);
        }

        return items;
    } */

  /*   saveCart(items: Array<GetCardResponse>): void {
        localStorage.setItem('cart_items', JSON.stringify(items));
    }  */
}
