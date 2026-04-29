import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductType} from "../../../types/product.type";



@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() product: ProductType;
  @Output() addToCartEvent: EventEmitter<ProductType> = new EventEmitter<ProductType>();

  constructor() {
    this.product = {
      id: 0,
      image: '',
      title: '',
      price: '',
      description: ''
    }
  }

}
