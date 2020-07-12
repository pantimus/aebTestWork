import { Injectable } from '@angular/core';
import  { Observable, of} from 'rxjs';


import { Product } from '../product/product';
import { Products } from './product-data';
 
@Injectable({
	providedIn: 'root'
})
export class ProductService {
 
  constructor() { }
 
  getProducts():  Observable<Product[]> {
    return of(Products);
  }

  addProductService(product: Product) 
  {
  	
  	let pr = new Product (product.id, product.title,product.price,product.desc);
  	Products.push(pr);
  	
  }
}
