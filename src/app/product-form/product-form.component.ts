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
	product: Product = new Product(null, "", null, "");//костыль, нужно исправить если будет время
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
        
   ]],
   price: [null,[
        Validators.required,
        Validators.pattern(/^[0-9]{1,5}(?:\.[0-9]{3})*(?:\,[0-9]{2})?$/)
   ]
       ],
   desc: ['',[
        Validators.required,
        
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
    this.productsService.addProductService(product);
  }
  isControlInvalid(controlTitle): boolean
  {
    const control = this.FormValid.controls[controlTitle];
    const result = control.invalid && control.touched;
    return result;
  }
  onSubmit(){
    
    const controls = this.FormValid.controls;
    if(this.FormValid.invalid)
    {
      Object.keys(controls).forEach(controlName=>controls[controlName].markAsTouched());
      return;
      
    }
    this.FormValid.value.id = this.increment(); //костыль
    this.addProduct(this.FormValid.value);
  }
  toggle()
  {
    this.childEvent.emit();
  }

  increment() { return this.counter++; }
}

