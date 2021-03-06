import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../Models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsFrmAPIService {
  constructor(private httpClient: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(environment.APIURL + '/products');
  }

  // getCountProducts() {}

  getProductByID(prdID: number): Observable<Product> {
    return this.httpClient.get<Product>(
      environment.APIURL + '/products/' + prdID
    );
  }

  getProductByCatID(cID: number): Observable<Product[]> {
    return this.httpClient.get<Product[]>(
      environment.APIURL + '/products?CategoryID=' + cID
    );
  }

  addProduct(newprd: Product): Observable<Product | undefined> {
    return this.httpClient.post<Product>(
      `${environment.APIURL}/products`,
      newprd,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          // 'utheoriztion 'token
        }),
      }
    );
  }

  DeleteProduct(id: number): Observable<{}> {
    return this.httpClient.delete<Product>(
      `${environment.APIURL}/products/${id}`,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          // 'utheoriztion 'token
        }),
      }
    );
  }

  EditProduct(id: number, newprd: Product): Observable<Product> {
    return this.httpClient.put<Product>(
      `${environment.APIURL}/products/${id}`,
      newprd,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          // 'utheoriztion 'token
        }),
      }
    );
  }

  // insertProduct(newprd: Product) {}
}
