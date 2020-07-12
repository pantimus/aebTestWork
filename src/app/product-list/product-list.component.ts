import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product';
import { ProductService } from '../service/product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})


export class ProductListComponent implements OnInit {
	productsList: Product[];
  constructor( private products: ProductService) { }

  ngOnInit(): void {
  	this.setProduct();
  }
  setProduct(): void
  {
  	this.productsList = this.products.getProducts();
  }
}	
