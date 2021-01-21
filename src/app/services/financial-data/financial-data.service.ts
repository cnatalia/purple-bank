/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of, pipe } from 'rxjs';
import { catchError, tap, reduce, distinct, map } from 'rxjs/operators';

import { environment } from '../../../environments/environment.prod';
import { FinancialDataResponse } from '../../shared/models/financial-data-response';
import { filter } from 'minimatch';

@Injectable({
  providedIn: 'root'
})
export class FinancialDataService {
  public url = `${environment.assets}/data/financial.json`

  constructor(private http: HttpClient) { }


  getFinancialData(): Observable<any> {
    return this.http.get<any>(this.url)
      .pipe(
        tap((response: any) => console.log('fetched financial data: ')),
        catchError(this.handleError<any>('getFinancialData'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }



}
