import { Component, OnInit } from '@angular/core';
import { Product} from '../product/product';
import { ProductService } from '../service/product.service';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  
	product: Product = new Product(0, "", 0, "Спецефично");

  counter: number = 0;
  products: Product[]; 
	constructor(private productsService: ProductService) { }

  ngOnInit(): void {
    //this.addProduct(this.product);
    this.product.id=0;
    this.show();
  }
  show()
  {
    this.products = this.productsService.getProducts();
  }
  addProduct(product:Product)
  {
    //console.log(product);
    this.productsService.addProductService(product);
  }
  onClick(product: Product){

    product.id = this.increment(); //костыль
  	this.addProduct(product);
    this.show();
  }
  increment() { return this.counter++; }
}
