import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() typeOfProduct: string;
  @Input() number: string;
  @Input() saldoTitle: string;
  @Input() saldoValue: string;

  constructor() { }

  ngOnInit(): void {
  }

}
