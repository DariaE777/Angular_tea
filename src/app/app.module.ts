import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from "./shared/shared.module";
import {ProductsModule} from "./views/products/products.module";
import {MainModule} from "./views/main/main.module";
import {CatalogueModule} from "./views/catalogue/catalogue.module";
import {OrderModule} from "./views/order/order.module";
declare var $: any;

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MainModule,
    CatalogueModule,
    OrderModule,
    HttpClientModule,
    NgbModule,
    SharedModule,
    ProductsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
