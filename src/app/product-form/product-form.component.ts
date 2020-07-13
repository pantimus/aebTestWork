import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Product} from '../product/product';
import { ProductService, visibleService } from '../service/product.service';
import { FormBuilder , FormGroup, Validators }   from '@angular/forms';
import { AppComponent} from '../app.component';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})



export class ProductFormComponent implements OnInit {

  @Output() childEvent = new EventEmitter();

  counter: number = 0;
	product: Product = new Product(0, "", '', "");//костыль, нужно исправить если будет время
  productsClass: Product[]; 
  FormValid: FormGroup;
  //pricePattern = "^ [a-z0-9 _-]";

	constructor(
    private productsService: ProductService,
    private visibleService: visibleService,
    private formbuild: FormBuilder) { }

  ngOnInit(): void {
    //this.addProduct(this.product);
    this.product.id=0;
    this.show();
    this.initForm();
  }
  initForm(){
  this.FormValid = this.formbuild.group({
   title: ['', [
        Validators.required,
        Validators.pattern(/[А-я][A-z]/)
   ]],
   price: [null,[
        Validators.required,
        Validators.pattern(/[0-9]/)
   ]
       ],
   desc: ['',[
        Validators.required,
        Validators.pattern(/[А-я]/)
   ]]
  });
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
  toggle()
  {
    this.childEvent.emit();
  }

  increment() { return this.counter++; }
}

