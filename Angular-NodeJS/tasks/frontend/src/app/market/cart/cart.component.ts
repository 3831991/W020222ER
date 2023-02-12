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

    constructor(private http: HttpService, private utility: UtilityService) { }

    ngOnInit() {
        if (localStorage.getItem('cart')) {
            const cart: number[] = JSON.parse(localStorage.getItem('cart') as any);

            const sub = this.http.post<Product[]>("products/cart", { cart }).pipe(finalize(() => {
                if (sub?.unsubscribe) {
                    sub.unsubscribe();
                }
            })).subscribe(data => {
                this.data = data;

                this.data.forEach(x => {
                    x.amount = cart.filter(n => n == x.id).length;
                });
            });
        }
    }
}
