import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductType} from "../../types/product.type";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

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

  ngOnInit(): void {

  }

  // addProductToCart() {
  //
  //   this.addToCartEvent.emit(this.product);
  // }
}
