import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sum"
})
export class SumPipe implements PipeTransform {
  transform(items: any[], attr: string): any {
    return items.reduce((acc, item) => acc + parseFloat(item[attr]), 0);
  }
}


