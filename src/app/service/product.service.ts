import { Injectable } from '@angular/core';
 
import { Product } from '../product/product';
import { Products } from './product-data';
 
@Injectable()
export class ProductService {
 
  constructor() { }
 
  getProducts(): Product[] {
    return Products;
  }
}