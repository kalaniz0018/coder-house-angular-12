import { Injectable } from '@angular/core';
import { GetCardResponse } from '../interfaces/get-card-response.interface';

@Injectable({
    providedIn: 'root'
})
export class ShoppingCartService {

    constructor() { }

    getItems(): Array<GetCardResponse> {
        let item = localStorage.getItem('cart_items')
        if(item){
            return JSON.parse(item)
        }
        return [];
    }

    getTotal() {
        return this.getItems().length;
    }
    addToCart(item: GetCardResponse) {
        let items: Array<GetCardResponse> = this.getItems()
        items.push(item);
        this.saveCart(items);
    }

    removeFromCart(item: GetCardResponse): Array<GetCardResponse> {
        let items: Array<GetCardResponse> = this.getItems()
        const index = items.findIndex((o) => o.title === item.title);

        if (index > -1) {
            items.splice(index, 1);
            this.saveCart(items);
        }

        return items;
    }

    saveCart(items: Array<GetCardResponse>): void {
        localStorage.setItem('cart_items', JSON.stringify(items));
    }

    clearCart(): void {
        localStorage.removeItem('cart_items');
    }

    totalElement() {
        let total = 0;
        let items: Array<GetCardResponse> = this.getItems()
        for (let element of items) {
            total += element.price
        }
        return total
    } 
}
