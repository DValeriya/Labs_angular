import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal/';
import { OrderService } from '../core/order.service';
import { Order } from '../modal/order';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { EditOrderComponent } from '../edit-order/edit-order.component';
import { DeleteOrderComponent } from '../delete-order/delete-order.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  modalRef: BsModalRef;
  orders: Order[];
  products = [ 'Knife', 'Dog', 'Toy', 'Bed', 'Chear' ];
  isTable = false;

  ordersForm: FormGroup;

  constructor(private modalService: BsModalService, private orderService: OrderService) {
  }

  ngOnInit() {
    this.orderService.getAll().subscribe((orders: Order[]) => this.orders = orders);
    this.ordersForm = new FormGroup({
      name: new FormControl('', [ Validators.required ]),
      product: new FormControl('', [ Validators.required ]),
      address: new FormControl('', [ Validators.required ]),
      total: new FormControl('', [ Validators.required ])
    });
    this.modalService.onHidden.subscribe(
      () => this.orderService.getAll().subscribe(
        (orders: Order[]) => this.orders = orders));
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { animated: true, ignoreBackdropClick: true });
  }

  onSubmit() {
    if (this.ordersForm.invalid) {
      return;
    }

    const order = this.ordersForm.value as Order;
    this.orderService.add(order).subscribe(() => this.onCancel());
  }

  onCancel() {
    this.orderService.getAll().subscribe((orders: Order[]) => this.orders = orders);
    this.ordersForm.reset();
    this.modalRef.hide();
  }

  edit(order: Order) {
    localStorage.removeItem('editOrderId');
    localStorage.setItem('editOrderId', order.id);
    this.modalRef = this.modalService.show(EditOrderComponent, { ignoreBackdropClick: true});
  }

  delete(order: Order) {
    localStorage.removeItem('deleteOrderId');
    localStorage.setItem('deleteOrderId', order.id);
    this.modalRef = this.modalService.show(DeleteOrderComponent, { ignoreBackdropClick: true, class: 'modal-sm' });
  }

  changeView() {
    this.isTable = !this.isTable;
  }
}
