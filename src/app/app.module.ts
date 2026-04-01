import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/pages/main/main.component';
import { CatalogueComponent } from './components/pages/catalogue/catalogue.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { OrderComponent } from './components/pages/order/order.component';
import {HttpClientModule} from "@angular/common/http";
import { ProductComponent } from './components/product/product.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import {ReactiveFormsModule} from "@angular/forms";
declare var $: any;

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CatalogueComponent,
    HeaderComponent,
    FooterComponent,
    OrderComponent,
    ProductComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
