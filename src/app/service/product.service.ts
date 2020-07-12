import { Injectable } from '@angular/core';
import  { Observable, of} from 'rxjs';


import { Product } from '../product/product';
import { Products } from './product-data';
 
@Injectable()
export class ProductService {
 
  constructor() { }
 
  getProducts(): Observable<Product[]> {
    return of(Products);
  }

  addProductService(product: Product)
  {
  	Products.push(new Product (product.id, product.title,product.price,product.desc));
  }
  delete(id)
  {
  	for(var i = Products.length - 1; i >= 0; i--) {
    if(Products[i].id == id) {
       Products.splice(i, 1);
       break;
    }
}
  }
}
