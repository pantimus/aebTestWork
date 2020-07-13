import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { ProductService, visibleService } from './service/product.service'
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { ProductFormComponent } from './product-form/product-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductComponent,
    ProductFormComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ProductService, visibleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
