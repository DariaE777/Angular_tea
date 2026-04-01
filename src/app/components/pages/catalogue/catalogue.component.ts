import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductType} from "../../../types/product.type";

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  constructor(private http:HttpClient) { }

  public products: ProductType[] = [];

  // public scrollTo(target: HTMLElement): void {
  //    target.scrollIntoView({behavior: "smooth"});
  // }

//   public addToCart(product:ProductType, target: HTMLElement):void {
//   this.scrollTo(target);
//   this.formValues.productTitle = product.title;
// }
  ngOnInit(): void {
    this.http.get<ProductType[]>('https://testologia.ru/tea')
        .subscribe((data)=> {
          this.products = data;
        })
  }

}
