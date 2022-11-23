import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'upper'
})
export class FirstUpperPipe implements PipeTransform {

    transform(value: string): string {
        if (!value) {
            return '';
        }

        if (typeof value != 'string') {
            return value;
        }

        return value[0].toUpperCase() + value.slice(1);
    }

}
