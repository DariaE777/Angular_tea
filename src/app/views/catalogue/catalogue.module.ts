import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogueRoutingModule } from './catalogue-routing.module';
import {CatalogueComponent} from "./catalogue.component";
import {SharedModule} from "../../shared/shared.module";
import {ProductsModule} from "../products/products.module";


@NgModule({
  declarations: [
   CatalogueComponent


  ],
  imports: [
    CommonModule,
    CatalogueRoutingModule,
    SharedModule,
      ProductsModule

  ]
})
export class CatalogueModule { }
