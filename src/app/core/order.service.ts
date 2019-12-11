import { Injectable } from '@angular/core';
import { Order } from '../modal/order';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, filter } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class OrderService {
  endPoint = 'http://localhost:8080/orders';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Order[]> {
    return this.http.get(this.endPoint).pipe(map((orders: any[]) => orders.map((order: any) =>
    new Order(order.id, order.name, order.product, order.address, order.total))),
    filter((orders: Order[]) => !!orders));
  }

  add(order: Order) {
    console.log(order);
    return this.http.post(this.endPoint, order);
  }

  getById(id: string): Observable<Order> {
    return this.http.get(this.endPoint, { params: new HttpParams().set('id', id) })
    .pipe(map((order: any) =>
    new Order(order.id, order.name, order.product, order.address, order.total)),
    filter((order: Order) => !!order));
  }

  delete(id: string) {
    return this.http.delete(this.endPoint, { params: new HttpParams().set('id', id) });
  }

  edit(order: Order) {
    return this.http.put(this.endPoint, order, { params: new HttpParams().set('id', order.id) });
  }
}
