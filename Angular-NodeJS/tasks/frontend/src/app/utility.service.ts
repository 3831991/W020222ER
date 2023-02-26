import { Injectable } from '@angular/core';
import { User } from './signup/user.interface';

@Injectable({
    providedIn: 'root'
})
export class UtilityService {
    private user?: User;
    cartAmount: number = 0;

    isLoader?: boolean;

    loader(isStart: boolean) {
        this.isLoader = isStart;
        document.body.style.overflow = isStart ? 'hidden' : 'initial';
    }

    setUser(user?: User) {
        this.user = user;
    }

    getUser() {
        return this.user;
    }

    addToCart(productId?: number) {
        let cart = [];

        if (localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart') as any);
        }

        if (productId) {
            cart.push(productId);
        }

        localStorage.setItem('cart', JSON.stringify(cart));

        this.cartAmount = cart.length;
    }

    constructor() {
        this.addToCart();
    }
}
