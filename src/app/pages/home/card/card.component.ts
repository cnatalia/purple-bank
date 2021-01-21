/* tslint:disable */
import { Component, OnInit, Input } from '@angular/core';
import { ProductTypes } from '../../../shared/enums/product-types';
import { TranslateService } from '@ngx-translate/core';
import { map } from 'rxjs/operators';
import { zip } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  public name;
  public disclaimerAboutMoney;
  public saldoTitleArrayUpDate: { [key: string]: any | any[] } = {};
  public saldoTitleArrayNotUpDate: { [key: string]: any | any[] } = {};
  public saldoTitleUse;
  public amount;
  public term;
  public barProgress;
  public imageURL = 'images/other.svg';

  @Input() consecutive: string;
  @Input() typeOfProduct: string;
  @Input() number: string;
  @Input() saldoValue: string;
  @Input() belongsTo: string;
  @Input() status: string;
  @Input() sumary;
  @Input() dueDate;


  constructor(private translate: TranslateService,
  private router: Router) {

  }

  ngOnInit(): void {
    this.name = ProductTypes[this.typeOfProduct];


    zip(
      this.translate.get('home.credit_card.up_to_date'),
      this.translate.get('home.free_investment_loan.up_to_date'),
      this.translate.get('home.current_account.up_to_date'),
      this.translate.get('home.fixed_term_deposit_certificate.up_to_date'),
      this.translate.get('home.credit_card.due'),
      this.translate.get('home.free_investment_loan.due'),
      this.translate.get('home.current_account.due'),
    ).pipe(
      map(([creditCardUp, freeInvestmentLoanUp, currentAccountUp, fixedTermDepositCertificateUp, creditCard, freeInvestmentLoan, currentAccount]) => (
        this.saldoTitleArrayUpDate = [
          { name: 'creditCard', key: creditCardUp },
          { name: 'freeInvestmentLoan', key: freeInvestmentLoanUp },
          { name: 'currentAccount', key: currentAccountUp },
          { name: 'fixedTermDepositCertificate', key: fixedTermDepositCertificateUp }
        ],
        this.saldoTitleArrayNotUpDate = [
          { name: 'creditCard', key: creditCard },
          { name: 'freeInvestmentLoan', key: freeInvestmentLoan },
          { name: 'currentAccount', key: currentAccount }
        ]
      )),
    ).subscribe();


    this.setSaldoTitle()

  }

  public setSaldoTitle() {
    switch (this.typeOfProduct) {
      case 'FREE_INVESTMENT_LOAN':
        this.saldoTitleUse = this.status === 'UP_TO_DATE' ? this.saldoTitleArrayUpDate.find(val => val.name === 'freeInvestmentLoan').key : this.saldoTitleArrayNotUpDate.find(val => val.name === 'freeInvestmentLoan').key
        this.amount = this.sumary.amount
        this.barProgress = (this.sumary.paid_installments * this.sumary.total_installments)/100 * 10
        break;

      case 'CREDIT_CARD':
        this.saldoTitleUse = this.status === 'UP_TO_DATE' ? this.saldoTitleArrayUpDate.find(val => val.name === 'creditCard').key : this.saldoTitleArrayNotUpDate.find(val => val.name === 'creditCard').key
        this.amount = this.status === 'UP_TO_DATE' ? this.sumary.advance_credit_line :  this.sumary.min_payment
        //this.barProgress = (this.sumary.balance * this.sumary.credit_line)/100 
        this.imageURL = `images/${this.sumary.franchise}.svg`
        
        break;

      case 'CURRENT_ACCOUNT':
        this.saldoTitleUse = this.status === 'OPEN' ? this.saldoTitleArrayUpDate.find(val => val.name === 'currentAccount').key : this.saldoTitleArrayNotUpDate.find(val => val.name === 'currentAccount').key
        this.amount = this.sumary.balance
        break;

      case 'FIXED_TERM_DEPOSIT_CERTIFICATE':
        this.saldoTitleUse = this.saldoTitleArrayUpDate.find(val => val.name === 'fixedTermDepositCertificate').key
        this.amount = this.sumary.amount
        this.term = this.sumary.term.count + ' Meses'
        break;

    }

  }

  public goToDetails(){
    event.preventDefault()
    this.router.navigateByUrl(`/details/${this.consecutive}`)
    //consecutive
  }

}
