import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderPipe',
  // pure: false
})
@Injectable()
export class GenderPipe implements PipeTransform {
  transform(items: any[], param: string): any {
    // filter items array, items which match and return true will be kept, false will be filtered out
    if (param === 'all') {
      console.log(items)
      return items;
    }

    if (items) {
      console.log(items)
      return items.filter((item, index) => item.gender === param);

    }
  }
}


/*Doc:  https://stackblitz.com/edit/angular-workshop-cc-ng-for-with-filter-pipes */
