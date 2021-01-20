/* tslint:disable */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import localEs from '@angular/common/locales/es-CO';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {TranslateModule, TranslateLoader } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './core-components/header/header.component';
import { NavComponent } from './core-components/nav/nav.component';
import { DetailsProductComponent } from './pages/details-product/details-product.component';
import { HomeComponent } from './pages/home/home.component';
import { ImagePathPipe } from './shared/pipes/path-assets.pipe';
import { CardComponent } from './pages/home/card/card.component';
export function createTranslateLoader(http: HttpClient) {
	return new TranslateHttpLoader(http, `${environment.assets}data/`, '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DetailsProductComponent,
    CardComponent,
    NavComponent,
    ImagePathPipe
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: (createTranslateLoader),
				deps: [HttpClient]
		}
		})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

registerLocaleData(localEs, 'es-CO');