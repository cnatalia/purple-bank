/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of, pipe } from 'rxjs';

import { filter } from 'minimatch';

import { catchError, tap, reduce, distinct, map } from 'rxjs/operators';

import { environment } from '../../../environments/environment.prod';
import { FinancialDataResponse } from '../../shared/models/financial-data-response';

@Injectable({
  providedIn: 'root'
})
export class FinancialDataService {
  public url = `${environment.assets}/data/financial.json`

  constructor(private http: HttpClient) { }


  getFinancialData(): Observable<any> {
    return this.http.get<any>(this.url)
      .pipe(
        tap((response: any) => console.log('Data ok! ')),
        catchError(this.handleError<any>('getFinancialData'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }



}
