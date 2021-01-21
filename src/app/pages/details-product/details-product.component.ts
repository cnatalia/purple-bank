/* tslint:disable */
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    this.id = this.route.snapshot.params.id
    console.log(this.route.snapshot.params.id)

    this.financialService.getFinancialData().subscribe(value => {

      this.data = value.map( value => {
        return{
          id: value.id,
          name:  ProductTypes[value.product.type],
          number: value.product.id,
          issue_date: value.issue_date,
          due_date: value.due_date,
          sumary: value.summary

        }
      }).filter(val => val.id === this.id)
 console.log(this.data)
    })
  }



}
