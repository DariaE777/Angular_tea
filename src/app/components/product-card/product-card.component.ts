import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductType} from "../../types/product.type";
import {HttpClient} from "@angular/common/http";
import {CartService} from "../../services/cart-service";

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private http:HttpClient, private CartService:  CartService,
              private router: Router) { }

  public products: ProductType[] = [];
  public product!: ProductType;



  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
       const productId = Number(params['id']);
        this.http.get<ProductType[]>('https://testologia.ru/tea')
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

  addToCart(title: string) {
      this.CartService.product = title;
      this.router.navigate(['/order']);
  }

}
