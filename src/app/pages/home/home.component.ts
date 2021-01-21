/* tslint:disable */
import { Component, OnInit } from '@angular/core';

import { FinancialDataService } from '../../services/financial-data/financial-data.service';
import { pipe, Observable, of } from 'rxjs';
import { FinancialDataResponse } from '../../shared/models/financial-data-response';
import { tap, map, reduce, distinct, filter } from 'rxjs/operators';
import { ProductTypes } from '../../shared/enums/product-types';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images = [700, 800, 807].map((n) => `https://picsum.photos/id/${n}/900/500`);
  public financialData$;
  public productsCount;
  public productsNames;
  public productsNameTrasnlated;
  public productsGruped;
  public ids;
  public details;
  public dataTransformed;

  constructor(private serviFinancialData: FinancialDataService) {

  }

  ngOnInit(): void {

    this.serviFinancialData.getFinancialData().subscribe(valor => {
      this.financialData$ = valor

      this.dataTransformed = this.financialData$.map(
        response => {
          return {
            name: response.product.type,
            id: response.product.id,
            issuer: response.product.issuer,
            status: response.status ? response.status : null,
            issue_date: response.issue_date,
            due_date: response.due_date,
            summary: response.summary
          }
        })
        
        this.productsCount = this.dataTransformed
        .map(response => { return response.name })
        .reduce((allProducts, product) => {
        product in allProducts ? allProducts[product]++ : allProducts[product] = 1
        return allProducts
      }, {})

      //console.log(this.dataTransformed)
      //let temporal = this.financialData$.map(response => { return response.product })

      this.productsGruped = Array(this.groupBy(this.dataTransformed.map(response => { return response }), 'name'))

      console.log(this.productsGruped)
      this.productsNames = Object.keys(this.productsCount)

      this.productsNameTrasnlated = this.productsNames.map(value => { return { name: ProductTypes[value], quantity: this.productsCount[value] } })

    })

  }

  public groupBy(objectArray, property) {

    return objectArray.reduce(function (acc, obj) {
      let key = obj[property]
      if (!acc[key]) { acc[key] = [] }
      acc[key].push(obj)
      return acc
    }, {})
  }

  public getDetails(data, id) {

    return data.find(value => value.product.id === id)

  }


}
