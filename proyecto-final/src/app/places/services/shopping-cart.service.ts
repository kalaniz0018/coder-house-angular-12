import { Injectable } from '@angular/core';
import { GetCardResponse } from '../interfaces/get-card-response.interface';

@Injectable({
    providedIn: 'root'
})
export class ShoppingCartService {

    constructor() { }

   /*  getItems(): Array<GetCardResponse> {
        return JSON.parse(localStorage.getItem('cart_items')) ?? [];
    } */

    getTotal() {
        return 2//this.getItems().length;
    }

    /* addToCart(item: ProductCart) {
        let items: Array<ProductCart> = this.getItems()
        items.push(item);
        this.saveCart(items);
    }

    removeFromCart(item: ProductCart): Array<ProductCart> {
        let items: Array<ProductCart> = this.getItems()
        const index = items.findIndex((o) => o.title === item.title);

        if (index > -1) {
            items.splice(index, 1);
            this.saveCart(items);
        }

        return items;
    }

    saveCart(items: Array<ProductCart>): void {
        localStorage.setItem('cart_items', JSON.stringify(items));
    } */
}
