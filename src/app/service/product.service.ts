import { Injectable } from '@angular/core';
 
import { Product } from '../product/product';
import { Products } from './product-data';
 
@Injectable()
export class ProductService {
 
  constructor() { }
 
  getProducts() {
    return Products;
  }
  addProductService(product: Product)
  {
  	Products.push(product);
  }
}