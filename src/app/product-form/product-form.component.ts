import { Component, OnInit } from '@angular/core';
import { Product} from '../product/product';
import { ProductService } from '../service/product.service';
import { FormsModule, FormGroup  }   from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  counter: number = 0;
	product: Product = new Product('', "", '', "");//костыль, нужно исправить если будет время
  productsClass: Product[]; 
	constructor(private productsService: ProductService) { }

  ngOnInit(): void {
    //this.addProduct(this.product);
    this.product.id=0;
    this.show();
  }
  show()
  {
    console.log(this.productsService.getProducts())
    this.productsService.getProducts().subscribe(productsClass => this.productsClass = productsClass);
    
  }
  addProduct(product: Product)
  {
    this.productsService.addProductService(this.product);
  }
  onClick(product){
    
    product.id = this.increment(); //костыль

  	this.addProduct(this.product);
    
  }
  increment() { return this.counter++; }
}

