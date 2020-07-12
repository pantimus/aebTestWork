import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	visibility: boolean = false;
	displayAddProduct: string = 'flex';
  title = 'Задание: Список Товаров';
  toggle()
  {
  	this.visibility=!this.visibility;
  }
}
