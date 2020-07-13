import { Component, Input, OnInit,  } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component'
import {Product} from './product'
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
	
 	@Input() product: Product;
 	private productList: ProductListComponent;
 	 constructor(
 	 	private productsService: ProductService,
 	 	
 	 	) { }
 	 private productUpdate;
  	ngOnInit(): void {
  		this.productsService.getProducts().subscribe(productUpdate => {
      	this.productUpdate = productUpdate;
    });
  	}
  	delete()
  	{

  		//console.log("delete check");
  		this.productsService.delete(this.product.id);
  	}

}
