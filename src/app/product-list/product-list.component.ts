import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product';
import { ProductService } from '../service/product.service';
import { ProductFormComponent } from '../product-form/product-form.component'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})


export class ProductListComponent implements OnInit {
  product: Product;
	productsList: Product[];
  constructor( private products: ProductService) { }


  ngOnInit(): void {
  	this.setProduct();
  }
  setProduct(): void
  {
  	this.products.getProducts().subscribe(productsList =>this.productsList = productsList);
    console.log("list",this.productsList)
  }
}	
