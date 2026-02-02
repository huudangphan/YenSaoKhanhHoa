import { Component, OnInit } from '@angular/core';
import {IProductYenSao} from '../../Interfaces/IProductYenSao';
import { ApiService } from '../../services/api.service';
import { CartDialogService } from '../../services/cart-dialog.service';
import { IProductCart } from '../../Interfaces/IProductCart';
import { Router } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  featuredProducts: IProductYenSao[] = [];
  categoryProducts: IProductYenSao[] = [];
  constructor(
    private apiService: ApiService,
    private router: Router,
    private cartDialogService: CartDialogService
  ) {}

  visibleFeaturedProducts: IProductYenSao[] = [];
  currentIndex = 0;
  slideSize = 4;

  ngOnInit(): void {
    this.apiService.getCategoryProducts().subscribe(data=>{  
      this.featuredProducts=data;
        this.updateVisibleProducts();

    });
    this.apiService.getFeaturedProducts().subscribe(data=>{
      this.categoryProducts=data;
    });


  
  }

  updateVisibleProducts(): void {



  
    this.visibleFeaturedProducts = this.featuredProducts.slice(
      this.currentIndex,
      this.currentIndex + this.slideSize
    );
  }

  prevSlide(): void {
    if (this.currentIndex > 0) {
      this.currentIndex -= this.slideSize;
      this.updateVisibleProducts();
    }
  }

  nextSlide(): void {
    if (this.currentIndex + this.slideSize < this.featuredProducts.length) {
      this.currentIndex += this.slideSize;
      this.updateVisibleProducts();
    }
  }

  goToProductDetail(productId: number): void {
    console.log('Navigating to product detail for ID:', productId);
    this.router.navigate(['detail', productId]);
  }

  openConfirmDialog(productId: number): void {
    this.cartDialogService.openConfirmDialog(() => {
      this.addToCart(productId);
    });
  }

  addToCart(productId: number): void {
    // Get all products from session storage
    const cartData = sessionStorage.getItem('cart_storage');
    let lstProduct: IProductCart[] = [];

    // Parse existing cart or initialize empty array
    if (cartData) {
      lstProduct = JSON.parse(cartData);
    }

    // Check if product already exists in cart
    const existingProduct = lstProduct.find(item => item.id === productId);

    if (existingProduct) {
      // Product exists, increment total
      console.log('Product found in cart:', existingProduct);
      existingProduct.total += 1;
    } else {
      // Product doesn't exist, add new product
      console.log('Adding new product to cart with ID:', productId);
         this.apiService.getProductById(productId).subscribe(data=>{
          lstProduct.push({ id: productId, total: 1,name:data?.name || '',price:data?.price || 0,image:data?.image || '' });
          sessionStorage.setItem('cart_storage', JSON.stringify(lstProduct));
        });
    }

    // Save updated cart to session storage
    sessionStorage.setItem('cart_storage', JSON.stringify(lstProduct));
  }

  
}
