/* tslint:disable */
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as Moment from 'moment';

import { FinancialDataService } from '../../services/financial-data/financial-data.service';
import { ProductTypes } from '../../shared/enums/product-types';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.scss']
})
export class DetailsProductComponent implements OnInit {
  public id;
  public data;



  constructor(
    protected route: ActivatedRoute,
    private financialService: FinancialDataService) {

  }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');

    this.financialService.getFinancialData().subscribe(value => {

      this.data = value.map(value => {
        return {
          id: value.id,
          name: ProductTypes[value.product.type],
          number: value.product.id,
          issue_date: Moment(value.issue_date).locale('es').format('L'),
          due_date: Moment(value.due_date).locale('es').format('L'),
          sumary: value.summary

        }
      }).filter(val => val.id === this.id)
      console.log(this.data)
    })
  }



}
