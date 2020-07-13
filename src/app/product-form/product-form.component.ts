import { Component, OnInit, Input } from '@angular/core';
import { Product} from '../product/product';
import { ProductService, visibleService } from '../service/product.service';
import { FormsModule, FormGroup, FormControl}   from '@angular/forms';
import { AppComponent} from '../app.component';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})



export class ProductFormComponent implements OnInit {

  @Input() inputForm: AppComponent;

  counter: number = 0;
	product: Product = new Product(0, "", '', "");//костыль, нужно исправить если будет время
  productsClass: Product[]; 

  //pricePattern = "^ [a-z0-9 _-]";

	constructor(
    private productsService: ProductService,
    private visibleService: visibleService) { }

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
  
  values = '';

  onKey(event: any) { // without type info
    this.values += event.target.value + ' | ';
  }
  increment() { return this.counter++; }
}

