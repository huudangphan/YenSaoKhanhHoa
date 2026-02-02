import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,map} from 'rxjs';
import { IProductYenSao } from '../Interfaces/IProductYenSao';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://jsonplaceholder.typicode.com'; // example API


  private dataUrl = 'assets/data/Product.json';
  private categoryUrl = 'assets/data/Category.json';

  //  private products:  IProductYenSao[] = [
  //   { id: 1, name: 'Yến sào trắng', price: 500000, image: 'assets/images/yensao_1.png' },
  //     { id: 2, name: 'Yến sào vàng', price: 700000, image: 'assets/images/yensao_1.png' },
  //     { id: 3, name: 'Yến sào tinh chế', price: 1000000, image: 'assets/images/yensao_1.png' },
  //     { id: 4, name: 'Yến sào hộp quà', price: 1500000, image: 'assets/images/yensao_1.png' },
  //     { id: 5, name: 'Yến sào thượng hạng', price: 2000000, image: 'assets/images/yensao_1.png' },
  //     { id: 6, name: 'Yến sào tổ chưa lọc', price: 800000, image: 'assets/images/yensao_1.png' }
  //   ];

  constructor(private http: HttpClient) {

  
  }

 
  

getAllProducts(): Observable<IProductYenSao[]> 
{ 
 



  return this.http.get<IProductYenSao[]>(this.dataUrl); 

}

  getCategoryProducts(): Observable<IProductYenSao[]> {
   
  return this.http.get<IProductYenSao[]>(this.categoryUrl); 
  }
  getFeaturedProducts(): Observable<IProductYenSao[]> {
        return this.http.get<IProductYenSao[]>(this.dataUrl); 
  }
getProductById(productId: number): Observable<IProductYenSao | undefined> 
{ 
  return this.http.get<IProductYenSao[]>(this.dataUrl).
  pipe( map(products => products.find(product => product.id === productId)) ); 
}
 getProductByMultiId(productIds: number[]): Observable<IProductYenSao[]> 
 { 
  return this.http.get<IProductYenSao[]>(this.dataUrl).
  pipe( map(products => products.filter(product => productIds.includes(product.id))) ); 
}
}
