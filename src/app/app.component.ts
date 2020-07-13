import { Component, EventEmitter, ViewChild } from '@angular/core';
import { visibleService } from './service/product.service' 
import {ProductFormComponent} from './product-form/product-form.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(ProductFormComponent) childComponent: ProductFormComponent;
	constructor(private visibleService: visibleService) 
    {

    }
	visibility: Boolean=false;
	displayAddProduct: string = 'flex';
  title = 'Задание: Список Товаров';
 


  toggle()
  {
  	this.visibility = this.visibleService.toggle();
  }
}
