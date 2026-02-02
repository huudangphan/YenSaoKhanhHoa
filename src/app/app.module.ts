import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { ProductsComponent } from './pages/products/products.component';
import { FooterComponent } from './pages/footer/footer.component';
import { MatMenuTrigger, MatMenuModule } from '@angular/material/menu';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { ConfirmDialogComponent } from './pages/common/confirm-dialog/confirm-dialog.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './pages/about/about.component'; // <-- add this


import { HttpClientModule } from '@angular/common/http'; // <-- import here
import { ApiService } from './services/api.service'; // <-- import here
@NgModule({
  declarations: [AppComponent, LayoutComponent, HomeComponent, ProductsComponent, FooterComponent, ProductDetailComponent, CartComponent, ConfirmDialogComponent, AboutComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatStepperModule,
    MatIconModule,
    MatButtonModule, MatMenuModule,
    MatDialogModule,MatInputModule ,MatFormFieldModule ,FormsModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }