import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { OrderService } from '../core/order.service';
import { Order } from '../modal/order';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.scss']
})
export class EditOrderComponent implements OnInit {
  ordersForm: FormGroup;
  products = [ 'Knife', 'Dog', 'Toy', 'Bed', 'Chear' ];

  constructor(private modalRef: BsModalRef, private orderService: OrderService) { }

  ngOnInit() {
    const id = localStorage.getItem('editOrderId');
    this.ordersForm = new FormGroup({
      name: new FormControl('', [ Validators.required ]),
      product: new FormControl('', [ Validators.required ]),
      address: new FormControl('', [ Validators.required ]),
      total: new FormControl('', [ Validators.required ])
    });

    this.orderService.getById(id).subscribe( (order: Order) => {
      const index = this.products.findIndex( (product: string) => product === order.product);
      this.ordersForm.setValue({
        name: order.name,
        product: this.products[index],
        address: order.address,
        total: order.total
      });
    });
  }


  onCancel() {
    this.ordersForm.reset();
    this.modalRef.hide();
  }

  onSubmit() {
    if (this.ordersForm.invalid) {
      return;
    }

    const order = this.ordersForm.value as Order;
    order.id = localStorage.getItem('editOrderId');
    this.orderService.edit(order).subscribe(() => this.onCancel());
  }

}
