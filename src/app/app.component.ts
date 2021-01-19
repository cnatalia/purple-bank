/* tslint:disable */
import { Component } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'purple-bank';

  constructor(	
    translate: TranslateService) 
    {
    translate.setDefaultLang('es');
    translate.use('es');
  }
}
