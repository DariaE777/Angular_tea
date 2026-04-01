import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./components/pages/main/main.component";
import {CatalogueComponent} from "./components/pages/catalogue/catalogue.component";
import {OrderComponent} from "./components/pages/order/order.component";
import {ProductCardComponent} from "./components/product-card/product-card.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'catalogue', component: CatalogueComponent},
  {path: 'order', component: OrderComponent},
  {path: 'product/:id', component: ProductCardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
