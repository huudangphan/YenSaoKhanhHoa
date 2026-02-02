import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

import { LayoutComponent } from './layout/layout.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent   
  },
  {
    path: 'detail/:id',
    component: ProductDetailComponent 
  },
   {
    path: 'cart',
    component: CartComponent 
  },
  {
    path: 'about',
    component: AboutComponent 
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}