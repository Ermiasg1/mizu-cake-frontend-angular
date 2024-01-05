import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  url = " http://localhost:8080/api/products";

  getProducts():Observable<Product[]>{
    return this.http.get<GetResponse>(this.url).pipe(map(response=>
      response._embedded.products
    ))

  }
  getProductAsAny(){
    return this.http.get<any>(this.url).pipe(map(response=>
      response._embedded.products
    ))

  }

  
}

interface GetResponse{
  _embedded: {
    products: Product[];
  }
}
