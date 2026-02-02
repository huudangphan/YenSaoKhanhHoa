import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProductYenSao } from 'src/app/Interfaces/IProductYenSao';
import { ApiService } from '../../services/api.service';
import { CartDialogService } from '../../services/cart-dialog.service';
import { IProductCart } from 'src/app/Interfaces/IProductCart';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private cartDialogService: CartDialogService
  ) {}
  
  productDetail!: IProductYenSao;
  product!:IProductYenSao | undefined;
  
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Product ID:', id);
     this.apiService.getProductById(id).subscribe(data=>{
      this.productDetail=data!;
    });
    console.log('Product Detail:', this.productDetail);
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
        this.product=data;
      });
      lstProduct.push({ id: productId, total: 1,name:this.product?.name || '',price:this.product?.price || 0,image:this.product?.image || '' });
    }

    // Save updated cart to session storage
    sessionStorage.setItem('cart_storage', JSON.stringify(lstProduct));
  }


openConfirmDialog(): void {
    this.cartDialogService.openConfirmDialog(() => {
      this.addToCart(this.productDetail.id);
    });
  }  

}
