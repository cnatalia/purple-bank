/* tslint:disable */
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TranslateService, TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';

import { HeaderComponent } from './core-components/header/header.component';
import { NavComponent } from './core-components/nav/nav.component';
import { ImagePathPipe } from './shared/pipes/path-assets.pipe';


@Component({
  selector: 'tpl-dummy',
  template: '<p>dummyComponent</p>'
})
export class DummyComponent {


}

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let dummyComponent: DummyComponent;
  let translate: TranslateService;
  let http: HttpTestingController;

  const translateServiceSpy = jasmine.createSpyObj('TranslateService', ['setDefaultLang', 'use']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: TranslateHttpLoader,
            deps: [HttpClient]
          }
        })
      ],
      declarations: [
        AppComponent,
        DummyComponent,
        HeaderComponent,
        NavComponent,
        ImagePathPipe
      ],
      providers: [
        { provide: TranslateService, useValue: translateServiceSpy }
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    translate = TestBed.get(TranslateService);
    http = TestBed.get(HttpTestingController);
    dummyComponent = TestBed.createComponent(DummyComponent).debugElement.componentInstance;
    app = fixture.debugElement.componentInstance;
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });



});
