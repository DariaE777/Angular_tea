import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {CartService} from "../../../services/cart-service";
import {HttpClient} from "@angular/common/http";
import {OrderRequest} from "../../../types/order.request";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit, OnDestroy{

  isOrderSuccess = false;
  orderErrorText = false;

  orderForm = this.fb.group({
    product: [{ value: '', disabled: true }, [Validators.required]],
    phone: ['', [Validators.required, Validators.pattern('^\\+?\\d{11}$')]],
    name: ['', [Validators.required, Validators.pattern('^[a-zA-Zа-яА-Я ]+$')]],
    surname: ['', [Validators.required, Validators.pattern('^[a-zA-Zа-яА-Я]+$')]],
    country: ['', [Validators.required, Validators.pattern('^[a-zA-Zа-яА-Я]+$')]],
    zip: ['', [Validators.required]],
    address: ['', [Validators.required, Validators.pattern('^[a-zA-Zа-яА-ЯёЁ0-9 \\-/]+$')]],
    comment: ['']

  });

 constructor(private fb: FormBuilder, private cartService: CartService, private http: HttpClient) { }
  private subscriptionOrder: Subscription | null =  null;
    ngOnInit() {
      this.orderForm.get('product')?.setValue(this.cartService.product);
    }
    ngOnDestroy() {
      this.subscriptionOrder?.unsubscribe();
    }

    submitOrder(): void {
        if (this.orderForm.invalid) {
            this.orderForm.markAllAsTouched();
            return;
        }

        const value = this.orderForm.getRawValue(); // возьмёт disabled product

        const data: OrderRequest = {
            name: value.name,
            last_name: value.surname,
            phone: value.phone,
            country: value.country,
            zip: value.zip,
            product: value.product,
            address: value.address,
            comment: value.comment ?? ''
        };

             this.subscriptionOrder = this.makeOrder(data).subscribe({
               next: (response) => {

                if (response.success && !response.message) {
                  this.isOrderSuccess = true;
                 this.orderForm.reset();

                } else {
                  this.isOrderSuccess = false;
                  this.orderErrorText = true;
                }
            },
                 error: () => {
                     this.isOrderSuccess = false;
                     this.orderErrorText = true;
                 }
            });
    }
    makeOrder(data: OrderRequest) {

   return this.http.post<{success: boolean, message?: string}>('https://testologia.ru/order-tea', data);
}
}
