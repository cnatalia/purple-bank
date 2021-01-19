/* tslint:disable */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public items = [
    { title: 'Slide 1' },
    { title: 'Slide 2' },
    { title: 'Slide 3' },
  ];

  constructor() { }

  ngOnInit(): void {
  }



  public addSlide() {
    this.items.push({
      title: `Slide 4`
    });
  }

}
