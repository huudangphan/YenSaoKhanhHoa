import { Component ,OnInit} from '@angular/core';
import { CartService, CartItem } from '../services/cart.service';
import { IProductCart } from 'src/app/Interfaces/IProductCart';
import { IProductYenSao } from 'src/app/Interfaces/IProductYenSao';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

constructor(private cartService: CartService,private apiService: ApiService) {
   
  }


cartItems:IProductCart[]=[];
totalCount: number = 0;
totalPrice  : number = 0;
  
 ngOnInit(): void {
    this.cartItems = this.getCartItems();
  }

  getCartItems(): IProductCart[] {
    const lstProduct = sessionStorage.getItem('cart_storage');
    if (lstProduct) {
      return JSON.parse(lstProduct);
    }
    return [];
  }

  removeItem(id: number): void {
    this.cartItems = this.cartItems.filter(item => item.id !== id);
    sessionStorage.setItem('cart_storage', JSON.stringify(this.cartItems));
    this.totalCount = this.cartItems.reduce((sum, item) => sum + item.total, 0);
    this.updateItemQuantity();
  }
  clearCart(): void {
    this.cartItems = [];
    sessionStorage.removeItem('cart_storage');
    this.totalCount = 0;
     this.updateItemQuantity();
  }
  updatecart(): void {
    console.log('Updating cart with items:', this.cartItems);

    sessionStorage.setItem('cart_storage', JSON.stringify(this.cartItems));
    //this.cartItems = this.getCartItems();
  }

  updateItemQuantity(): void {

      this.totalCount = this.cartItems.reduce((sum, item) => sum + item.total, 0); 
      this.totalPrice = this.cartItems.reduce((sum, item) => sum + (item.price * item.total), 0); 
  }
  

}
