import { Component, Input, OnInit } from '@angular/core';
import { Product} from '../product/product';
import { ProductService } from '../service/product.service';
import { FormsModule }   from '@angular/forms';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
   //@Input() visibility: boolean;
  counter: number = 0;

	product: Product = new Product(0, "", 0, "");
  products: Product[]; 
	constructor(private productsService: ProductService) { }

  ngOnInit(): void {
    
    this.show();
  }
  show():void
  {
    this.productsService.getProducts().subscribe(products => this.products = products );
    
  }
  addProduct()
  {
    
    this.product.id = this.increment();

    this.productsService.addProductService(this.product);
  }
  onClick(product){
    var sendProduct: Product = new Product(product.id, product.title, product.price, product.desc);
  	this.addProduct();

  }
  increment()
  {
    return this.counter++;//костыль
  }

}
