import { Injectable } from '@angular/core';

export interface CartItem {
  name: string;
  price: number;
  quantity: number;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: CartItem[] = [];

  getItems(): CartItem[] {
    return this.items;
  }

  addToCart(item: CartItem): void {
    const existing = this.items.find(p => p.name === item.name);
    if (existing) {
      existing.quantity += item.quantity;
    } else {
      this.items.push({ ...item });
    }
  }

  removeFromCart(name: string): void {
    this.items = this.items.filter(item => item.name !== name);
  }

  clearCart(): void {
    this.items = [];
  }

  getTotal(): number {
    return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }
}
