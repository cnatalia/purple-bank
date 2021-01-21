/* tslint:disable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { TranslateModule } from '@ngx-translate/core';

import { Store } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { ImagePathPipe } from '../../../shared/pipes/path-assets.pipe';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let router = {
    navigateByUrl: jasmine.createSpy('navigate')
  };
  let event = {
    preventDefault: jasmine.createSpy('prevent')
  }
  let store: MockStore;
  const initialState = { loggedIn: false };



  //const routerSpy = jasmine.createSpyObj( 'Router', ['navigateByUrl'])

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardComponent, ImagePathPipe],
      imports: [

        TranslateModule.forRoot(),
        RouterTestingModule
      ],
      providers: [
        provideMockStore({ initialState })
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    store = TestBed.inject(MockStore);
    router = TestBed.get(Router);

    fixture = TestBed.createComponent(CardComponent);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#goToDetails', () => {

    it('Should go to details', () => {


      component.consecutive = '1';
      spyOn(router, 'navigateByUrl');


      component.goToDetails()

      expect(router.navigateByUrl).toHaveBeenCalledWith('/details/1');


    });
  });

  describe('#setData', () => {

    it('Should set CURRENT_ACCOUNT', () => {

      component.typeOfProduct = 'CURRENT_ACCOUNT';
      component.status = 'OPEN'
      component.sumary = {
        balance : '162826'
      }

      component.saldoTitleArrayUpDate = [
        { name: 'creditCard', key: 'creditCard' },
        { name: 'freeInvestmentLoan', key: 'freeInvestmentLoan' },
        { name: 'currentAccount', key: 'currentAccount' }
      ]

      component.setData()

      expect(component.saldoTitleUse).toEqual('currentAccount')
      expect(component.amount).toEqual('162826')

    })

    it('Should set FIXED_TERM_DEPOSIT_CERTIFICATE', () => {

      component.typeOfProduct = 'FIXED_TERM_DEPOSIT_CERTIFICATE';
      
      component.sumary = {
        amount : '162826',
        term: { count: 9}
      }

      component.saldoTitleArrayUpDate = [
        { name: 'creditCard', key: 'creditCard' },

        { name: 'fixedTermDepositCertificate', key: 'cdt' }
      ]

      component.setData()

      expect(component.saldoTitleUse).toEqual('cdt')
      expect(component.amount).toEqual('162826')
      expect(component.term).toEqual('9 Meses')

    })



    it('Should set CREDIT_CARD', () => {

      component.typeOfProduct = 'CREDIT_CARD';
      component.status= 'UP_TO_DATE'
      component.sumary = {
        advance_credit_line : '162826',
        franchise:'VISA'
      }

      component.saldoTitleArrayUpDate = [
        { name: 'creditCard', key: 'creditCard' },
        { name: 'fixedTermDepositCertificate', key: 'cdt' }
      ]

      component.setData()

      expect(component.saldoTitleUse).toEqual('creditCard')
      expect(component.amount).toEqual('162826')
      expect(component.imageURL).toEqual('images/VISA.svg')

    })

    it('Should set CREDIT_CARD', () => {

      component.typeOfProduct = 'CREDIT_CARD';
      component.status= 'OVER_DUE'
      component.sumary = {
        advance_credit_line : '162826',
        franchise:'VISA',
        min_payment: '123'
      }

      component.saldoTitleArrayNotUpDate = [
        { name: 'creditCard', key: 'paga tu creditCard' },
        { name: 'fixedTermDepositCertificate', key: 'paga cdt' }
      ]

      component.setData()

      expect(component.saldoTitleUse).toEqual('paga tu creditCard')
      expect(component.amount).toEqual('123')
      expect(component.imageURL).toEqual('images/VISA.svg')

    })

    it('Should set FREE_INVESTMENT_LOAN', () => {

      component.typeOfProduct = 'FREE_INVESTMENT_LOAN';
      component.status= 'UP_TO_DATE'
      component.sumary = {
        amount : '162826',
        paid_installments: 11,
        total_installments: 36
      }

      component.saldoTitleArrayUpDate = [
        { name: 'creditCard', key: 'creditCard' },
        { name: 'freeInvestmentLoan', key: 'libre inversion' }
      ]

      component.setData()

      expect(component.saldoTitleUse).toEqual('libre inversion')
      expect(component.amount).toEqual('162826')
      expect(component.barProgress).toEqual(39.6)

    })

    it('Should set FREE_INVESTMENT_LOAN', () => {

      component.typeOfProduct = 'FREE_INVESTMENT_LOAN';
      component.status= 'OVER_DUE'
      component.sumary = {
        amount : '162826',
        paid_installments: 11,
        total_installments: 36
      }

      component.saldoTitleArrayNotUpDate = [
        { name: 'creditCard', key: 'creditCard' },
        { name: 'freeInvestmentLoan', key: 'Debes pagar' }
      ]

      component.setData()

      expect(component.saldoTitleUse).toEqual('Debes pagar')
      expect(component.amount).toEqual('162826')
      expect(component.barProgress).toEqual(39.6)

    })


  })
});
