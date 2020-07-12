import { Component, OnInit } from '@angular/core';
//import { PRODUCTS } from './product-list';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

	products: {
		id: 1;
		title: 'хлеб';
		price: 50;
		description: 'Очень вкусный хлеб'
	};
  constructor() { }

  ngOnInit(): void {
  }

}
