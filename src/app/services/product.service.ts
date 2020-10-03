import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';
import {HTTP_START} from '../constants';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public products=new BehaviorSubject<Product[]>([])
  constructor(private http:HttpClient) { }
  public getProducts(){
    this.http.get<Product[]>(HTTP_START+'user/produits').subscribe(
      res=>{
        this.products.next(res);
      }
    )
  }
}
