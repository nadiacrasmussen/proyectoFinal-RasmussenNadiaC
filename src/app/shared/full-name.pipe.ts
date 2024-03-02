import { Pipe, PipeTransform } from '@angular/core';


export interface userPipe{
  firstName: string;
  lastName: string;
}
@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {
  transform(value: userPipe, ...args: unknown[]): unknown {
    return value.firstName+' '+value.lastName;
  }

}
