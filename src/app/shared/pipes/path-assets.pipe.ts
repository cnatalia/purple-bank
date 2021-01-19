/* tslint:disable */
import { Pipe, PipeTransform } from '@angular/core';

import { isNullOrUndefined } from 'util';

import { environment } from '../../../environments/environment';

@Pipe({
  name: 'pathImg',
})
export class ImagePathPipe implements PipeTransform {
  transform(value: string): string {
    return !isNullOrUndefined(value)
      ? environment.assets  + value
      : value;
  }
}