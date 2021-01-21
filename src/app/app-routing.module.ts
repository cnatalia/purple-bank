import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { DetailsProductComponent } from './pages/details-product/details-product.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent

  },
  {
    path: 'details/:id',
    component: DetailsProductComponent

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
