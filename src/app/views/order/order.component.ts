import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder,FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {HttpService} from "../../shared/services/http-service";
import {OrderRequest} from "../../types/order.request";


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit, OnDestroy{

  isOrderSuccess:boolean = false;
  orderErrorText:boolean = false;
    productTitle:string = '';

  orderForm:FormGroup = this.fb.group({
    product: [{ value: '', disabled: true }, [Validators.required]],
    phone: ['', [Validators.required, Validators.pattern('^\\+?\\d{11}$')]],
    name: ['', [Validators.required, Validators.pattern('^[a-zA-Zа-яА-Я ]+$')]],
    surname: ['', [Validators.required, Validators.pattern('^[a-zA-Zа-яА-Я]+$')]],
    country: ['', [Validators.required, Validators.pattern('^[a-zA-Zа-яА-Я]+$')]],
    zip: ['', [Validators.required]],
    address: ['', [Validators.required, Validators.pattern('^[a-zA-Zа-яА-ЯёЁ0-9 \\-/]+$')]],
    comment: ['']

  });

 constructor(private fb: FormBuilder, private route: ActivatedRoute, private httpService: HttpService) { }
  private subscriptionOrder: Subscription | null =  null;
    ngOnInit():void {
        this.route.queryParamMap.subscribe(params => {
            this.productTitle = params.get('title') || '';

        });
      this.orderForm.get('product')?.setValue(this.productTitle);
    }
    ngOnDestroy():void {
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

             this.subscriptionOrder = this.httpService.makeOrder(data).subscribe({
               next: (response) => {

                if (response.success && !response.message) {
                  this.isOrderSuccess = true;
                 this.orderForm.reset();

                } else {
                  this.isOrderSuccess = false;
                  this.orderErrorText = true;
                }
            },
                 error: ():void => {
                     this.isOrderSuccess = false;
                     this.orderErrorText = true;
                 }
            });
    }
}
