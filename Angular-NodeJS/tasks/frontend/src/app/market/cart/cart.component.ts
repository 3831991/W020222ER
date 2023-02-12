import { Component } from '@angular/core';
import { finalize } from 'rxjs';
import { HttpService } from 'src/app/http.service';
import { UtilityService } from 'src/app/utility.service';
import { Product } from '../products-managment/products.interface';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent {
    data: Product[] = [];
    cart: number[] = [];
    sum: number = 0;

    changeAmount() {
        this.cart = [];

        this.data.forEach(x => {
            for (let i = 0 ; i < x.amount; i++) {
                this.cart.push(x.id);
            }
        });

        this.sum = this.data.reduce((res, x) => res += x.amount * (x.price - x.discount), 0);
        this.utility.cartAmount = this.cart.length;
        localStorage.setItem('cart', JSON.stringify(this.cart));
    }

    constructor(private http: HttpService, private utility: UtilityService) { }

    ngOnInit() {
        if (localStorage.getItem('cart')) {
            this.cart = JSON.parse(localStorage.getItem('cart') as any);

            const sub = this.http.post<Product[]>("products/cart", { cart: this.cart }).pipe(finalize(() => {
                if (sub?.unsubscribe) {
                    sub.unsubscribe();
                }
            })).subscribe(data => {
                this.data = data;

                this.data.forEach(x => {
                    x.amount = this.cart.filter(n => n == x.id).length;
                });

                this.changeAmount();
            });
        }
    }
}
