import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  features = [
    { name: 'Feature 1', description: 'Description 1', icon: 'favorite', text: 'Sức khỏe' },
    { name: 'Feature 2', description: 'Description 2', icon: 'shield', text: 'An toàn' },
    { name: 'Feature 3', description: 'Description 3', icon: 'eco', text: 'Tự nhiên' }
  ];

  products = [
    { name: 'Product 1', price: 100, image: 'assets/product1.jpg' },
    { name: 'Product 2', price: 200, image: 'assets/product2.jpg' },
    { name: 'Product 3', price: 300, image: 'assets/product3.jpg' },
    { name: 'Product 4', price: 400, image: 'assets/product4.jpg' }
  ];
}