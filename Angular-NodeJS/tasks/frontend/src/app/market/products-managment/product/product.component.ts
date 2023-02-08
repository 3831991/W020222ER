import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/http.service';
import { Product } from '../products.interface';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent {
    product?: Product;
    sub?: Subscription;
    form?: FormGroup;

    buildForm(item?: Product) {
        this.form = new FormGroup({
            name: new FormControl(item?.name, [
                Validators.required,
            ]),
            price: new FormControl(item?.price, [
                Validators.required,
            ]),
            discount: new FormControl(item?.discount, [
                Validators.required,
            ]),
        });
    }

    add() {
        const sub = this.http.post<Product>(`products`, this.form?.value).subscribe(item => {
            this.router.navigate(['market', 'products', 'manage']);
            sub.unsubscribe();
        });
    }

    save() {
        const sub = this.http.put<void>(`products/${this.product?.id}`, this.form?.value).subscribe(() => {
            this.router.navigate(['market', 'products', 'manage']);
            sub.unsubscribe();
        });
    }

    getProduct(id: string) {
        const sub = this.http.get<Product>(`product/${id}`).subscribe(item => {
            this.product = item;
            this.buildForm(item);
            sub.unsubscribe();
        });
    }

    constructor(private router: Router, private route: ActivatedRoute, private http: HttpService) {

        this.sub = this.route.params.subscribe(params => {
            if (params['id']) {
                this.getProduct(params['id']);
            } else {
                this.buildForm();
            }
        });

    }

    ngOnInit() {

    }

    ngOnDestroy() {
        this.sub?.unsubscribe();
    }
}
