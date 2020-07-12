import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component'
import {Product} from './product'


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
	
 	@Input() product: Product;
 	private productList: ProductListComponent;
 	 constructor() { }

  	ngOnInit(): void {

  	}

}
