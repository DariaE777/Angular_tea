import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductType} from "../../types/product.type";


@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  constructor(private http:HttpClient) { }

  public products: ProductType[] = [];

    ngOnInit(): void {
    this.http.get<ProductType[]>('https://testologia.ru/tea')
        .subscribe((data)=> {
          this.products = data;
        })
  }

}
