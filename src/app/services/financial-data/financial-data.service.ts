/* tslint:disable */
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FinancialDataService {
  public url = `${environment.assets}/data/financial.json`

  constructor(private http: HttpClient) { }

  getFinancialData(): Observable<any[]> {
    return this.http.get<any[]>(this.url)
      .pipe(
        tap(_ => console.log('fetched financial data')),
        catchError(this.handleError<any []>('getFinancialData', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); 

      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }


 public getTypeOfProduct(info){

  return
 }

}
