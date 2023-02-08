import { Component } from '@angular/core';
import { finalize } from 'rxjs';
import { HttpService } from 'src/app/http.service';
import { Product } from './products.interface';

@Component({
    selector: 'app-products-managment',
    templateUrl: './products-managment.component.html',
    styleUrls: ['./products-managment.component.scss']
})
export class ProductsManagmentComponent {
    data: Product[] = [];

    constructor(private http: HttpService) {}

    ngOnInit() {
        const sub = this.http.get<Product[]>("products").pipe(finalize(() => {
            if (sub?.unsubscribe) {
                sub.unsubscribe();
            }
        })).subscribe(data => {
            this.data = data;
        });
    }
}
