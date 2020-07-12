import { Component, OnInit } from '@angular/core';
import { Product} from '../product/product';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

	id: number;
	product: Product;
	products: [];
	constructor() { }

  ngOnInit(): void {
  }
  onClick(){
  	this.products.push(
  	{
  		id: this.product.id, 
  		title: this.product.title,
  		price: this.product.price,
  		desc: this.product.desc 
  	}
  	);

  	this.product.title = '';
  	this.product.price = 0;
  	this.product.desc = '';
  	this.product.id = 0;
  }
}


export class Increment {
	counter: number = 0;
	increment() { this.counter++; }
}