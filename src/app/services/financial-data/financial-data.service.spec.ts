/* tslint:disable */

import { TestBed, inject } from '@angular/core/testing';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { FinancialDataService } from './financial-data.service';

describe('FinancialDataService', () => {
  let service: FinancialDataService;
  let httpClient: HttpClient;


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FinancialDataService],
      imports: [
        HttpClientTestingModule
      ]
    });
    httpClient = TestBed.get(HttpClient);

    //service = TestBed.inject(FinancialDataService);
    service = new FinancialDataService(httpClient)

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getFinancialData', () => {
    it('should send the data advisor', () => {


      const response: any = {
        'code': '0',
        'message': 'SUCCESS-0: Transaction realized successfully',
        'details': {}
      };

      service.getFinancialData().subscribe((res) => {
        expect(res).toEqual(response);
      });

    });
  });
});
