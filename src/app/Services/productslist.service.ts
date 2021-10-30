import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../Models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductslistService {
  constructor(private httpClient: HttpClient) {}

  // get all products
  getAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(environment.APIURL + '/product');
  }

  // get  single product by ID
  getProductByID(prdID: number): Observable<Product> {
    return this.httpClient.get<Product>(
      environment.APIURL + '/product/' + prdID
    );
  }

  //// get   products by categoryID
  getProductByCatID(cID: number): Observable<Product[]> {
    return this.httpClient.get<Product[]>(
      environment.APIURL + '/products?CategoryID=' + cID
    );
  }

  // add product
  addProduct(newprd: Product): Observable<Product | undefined> {
    return this.httpClient.post<Product>(
      `${environment.APIURL}/product`,
      newprd,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          // 'utheoriztion 'token
        }),
      }
    );
  }

  //delete product
  DeleteProduct(id: number): Observable<{}> {
    return this.httpClient.delete<Product>(
      `${environment.APIURL}/product/${id}`,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          // 'utheoriztion 'token
        }),
      }
    );
  }

  //Edit product
  EditProduct(id: number, newprd: Product): Observable<Product> {
    return this.httpClient.put<Product>(
      `${environment.APIURL}/product/${id}`,
      newprd,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          // 'utheoriztion 'token
        }),
      }
    );
  }
}
