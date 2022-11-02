import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    product: string;

    list: string[] = [
        "מלפפון",
        "עגבניה",
        "גמבה",
        "חציל",
        "כוסברה",
    ];

    addProduct() {
        this.list.push(this.product);
        this.product = "";
    }

    removeItem(i: number) {
        this.list.splice(i, 1);
    }

    constructor() { }

    ngOnInit() {
    }

}
