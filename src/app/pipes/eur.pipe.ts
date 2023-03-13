
import { Pipe, PipeTransform } from '@angular/core';
import { formatCurrency, getCurrencySymbol } from '@angular/common';

@Pipe({ name: 'eur' })
export class EurPipe implements PipeTransform {
    transform(
        value: number,
        currencyCode: string = 'EUR',
        display: string = 'EUR',
        digitsInfo: string = '0.2-2',
        locale: string = 'de-DE',
    ): string | null {
        return formatCurrency(
            value,
            locale,
            currencyCode,
            currencyCode,
            digitsInfo,
        );
    }
}
