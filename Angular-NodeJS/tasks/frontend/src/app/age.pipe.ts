import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'age'
})
export class AgePipe implements PipeTransform {

    transform(date: string): number {
        const ms = +new Date() - +new Date(date);
        return Math.round(ms / 1000 / 60 / 60 / 24 / 365 * 10) / 10;
    }

}
