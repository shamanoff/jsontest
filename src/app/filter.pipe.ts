import {Pipe, PipeTransform} from '@angular/core';
import {isUndefined} from 'util';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(users: any, term: any): any {
    // check if search is undefined
    if (term === isUndefined) return users;

    // return updated users array
    return users.filter(function (user) {
      return user.first_name.toLowerCase().includes(term.toLowerCase()) || user.last_name.toLowerCase().includes(term.toLowerCase());
    });
  }



}
