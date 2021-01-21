import { Component, OnInit, Input } from '@angular/core';
import { ProductTypes } from '../../../shared/enums/product-types';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  public name;
  @Input() typeOfProduct: string;
  @Input() number: string;
  @Input() saldoTitle: string;
  @Input() saldoValue: string;

  constructor() {

  }

  ngOnInit(): void {
    this.name = ProductTypes[this.typeOfProduct];
  }

}
