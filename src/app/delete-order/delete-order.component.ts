import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal/';
import { OrderService } from '../core/order.service';

@Component({
  selector: 'app-delete-order',
  templateUrl: './delete-order.component.html',
  styleUrls: ['./delete-order.component.scss']
})
export class DeleteOrderComponent implements OnInit {
  id: string;

  constructor(private modalRef: BsModalRef, private modalService: BsModalService, private orderService: OrderService) { }

  ngOnInit() {
    this.id = localStorage.getItem('deleteOrderId');
  }

  onSubmit(): void {
    console.log(this.id);
    this.orderService.delete(this.id).subscribe(() => this.onCancel());
  }

  onCancel(): void {
    this.modalRef.hide();
  }

}
