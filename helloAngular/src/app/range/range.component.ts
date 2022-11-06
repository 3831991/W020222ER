import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-range',
    templateUrl: './range.component.html',
    styleUrls: ['./range.component.css']
})
export class RangeComponent implements OnInit {
    @Input()
    min: number = 0;

    @Input()
    max: number = 100;

    @Input()
    value: number;

    @Output()
    valueChange = new EventEmitter;

    @Output()
    kuku = new EventEmitter;

    change() {
        this.valueChange.emit(this.value);
        this.kuku.emit("יאללה בלאגן!!!")
    }

    constructor() { }

    ngOnInit() {
    }

}
