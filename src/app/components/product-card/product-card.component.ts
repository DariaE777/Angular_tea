import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductType} from "../../types/product.type";
import {HttpService} from "../../services/http-service";


@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private httpService: HttpService) { }

  public products: ProductType[] = [];
  public product?: ProductType;



  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
       const productId = Number(params['id']);
        this.httpService.getProducts()
            .subscribe((data)=> {
              this.products = data;
              const foundProduct = this.products.find(product => product.id === productId);
              if (foundProduct) {
                this.product = foundProduct;
              } else {
                console.error('Продукт не найден!');
              }
            })
      }
    });
  }
}
