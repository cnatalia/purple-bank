/* tslint:disable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { SpyNgModuleFactoryLoader, RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TranslateModule } from '@ngx-translate/core';

import { of } from 'rxjs';

import { FinancialDataService } from '../../services/financial-data/financial-data.service';

import { DetailsProductComponent } from './details-product.component';

describe('DetailsProductComponent', () => {
  let component: DetailsProductComponent;
  let fixture: ComponentFixture<DetailsProductComponent>;
  let route: ActivatedRoute;

  const financialSpy = jasmine.createSpyObj('FinancialDataService', ['getFinancialData']);

  const activatedRouteStub = {
    snapshot: {
      paramMap: {
        get: () => 1, // represents the bookId
      },
    }
  };

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [DetailsProductComponent
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        TranslateModule.forRoot()
      ],
      providers: [
        { provide: FinancialDataService, useValue: financialSpy },
        { provide: ActivatedRoute, useValue: activatedRouteStub }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {

    financialSpy.getFinancialData.and.returnValue(of([
      {
        id: "1",
        product: {
          id: "721682723",
          type: "FIXED_TERM_DEPOSIT_CERTIFICATE",
          issuer: "PURPLE_BANK"
        },
        issue_date: "2020-06-27T15:46:29.562Z",
        due_date: "2021-03-27T15:46:29.562Z",
        summary: {
          nominal_rate: 0.93,
          amount: 10000000,
          profits: 158020.81,
          term: {
            count: 9,
            units: "Months"
          }
        }
      }
    ]))

    fixture = TestBed.createComponent(DetailsProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();


    expect(financialSpy.getFinancialData).toHaveBeenCalled();
 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



});
