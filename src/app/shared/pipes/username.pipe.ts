import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'username',
})
export class UserNamePipe implements PipeTransform {
  transform(value: { firstName: string, lastName: string }, locale: 'en' | 'fr' = 'fr'): string {
    return locale === 'fr' ? `${value.lastName.toUpperCase() + ' '}
    ${value.firstName.charAt(0).toString().toUpperCase() + value.firstName.substring(1, value.firstName.length).toLowerCase() + ' '}` :
      `${value.firstName.charAt(0).toString().toUpperCase() + value.firstName.substring(1, value.firstName.length).toLowerCase() + ' '}
      ${value.lastName.toUpperCase() + ' '}`;
  }
}
