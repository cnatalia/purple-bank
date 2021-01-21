/* tslint:disable */
export interface FinancialDataResponse {
 issue_date: Date;
 due_date: Date;
 product: {
  id: number;
  type: string;
  issuer: string;
 };
 status?: string;
 summary: {}

}[]
