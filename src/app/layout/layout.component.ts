import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
 
    constructor(private router: Router) {}
  goToShoppingCart(productId: number): void {
    console.log('Navigating to product detail for ID:', productId);
    this.router.navigate(['detail', productId]);
  }
}
