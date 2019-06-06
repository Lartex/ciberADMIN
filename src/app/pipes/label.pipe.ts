import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'labelPipe',
})
@Injectable()
export class LabelPipe implements PipeTransform {
  transform(items: any[], param: string): any {
    param = param.toLowerCase();

    if (items) {
      console.log
      return items.filter((item, index) => {
        console.log(index)
        const find = item.label.toLowerCase().indexOf(param);
        return find === -1 ? false : true;
      });
    }
  }
}


/*Doc:  https://stackblitz.com/edit/angular-workshop-cc-ng-for-with-filter-pipes */
