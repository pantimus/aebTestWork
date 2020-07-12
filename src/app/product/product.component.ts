import { Component, Input, OnInit } from '@angular/core';
//import { ProductService } from '../service/product.service';
import {Product} from './product'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
	@Input() product: Product;
    @Input() products: Product[];
  constructor() { }

  ngOnInit(): void {
  }

}
