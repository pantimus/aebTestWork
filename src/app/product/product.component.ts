import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

	product: Product = {
		id: 1,
		name: "Хлеб ХлебХлеб Хлеб",
		price: 50,
		description: "Описание Описание Описание Описание Описание Описание Описание Описание Описание "
	}
  constructor() { }

  ngOnInit(): void {
  }

}
