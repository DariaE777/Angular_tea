import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {OrderRequest} from "../types/order.request";
import {Observable} from "rxjs";
import {ProductType} from "../types/product.type";


@Injectable({
    providedIn: 'root'
})

export class HttpService {

    private readonly baseUrl = 'https://testologia.ru';
    constructor(private http:HttpClient) { }
    getProducts(): Observable<ProductType[]> {
        return this.http.get<ProductType[]>(`${this.baseUrl}/tea`);
    }

    makeOrder(data: OrderRequest): Observable<{success: boolean, message?: string}> {
        return this.http.post<{success: boolean, message?: string}>(`${this.baseUrl}/order-tea`, data);
    }

}

