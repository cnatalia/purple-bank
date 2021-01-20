/* tslint:disable */
import { Component, OnInit } from '@angular/core';
import { FinancialDataService } from '../../services/financial-data/financial-data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images = [700, 800, 807].map((n) => `https://picsum.photos/id/${n}/900/500`);
  public financialData$;

  constructor(private serviFinancialData: FinancialDataService) {

  }

  ngOnInit(): void {
    this.serviFinancialData.getFinancialData().subscribe(data => {
      console.log(data),
      this.financialData$ = data
    })


  }




}
