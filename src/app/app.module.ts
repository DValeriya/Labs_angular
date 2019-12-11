import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ReactiveFormsModule } from '@angular/forms';
import { NullablePricePipe } from './shared/nullable-price.pipe';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { DeleteOrderComponent } from './delete-order/delete-order.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NullablePricePipe,
    EditOrderComponent,
    DeleteOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    NgxDatatableModule
  ],
  providers: [],
  entryComponents: [
    EditOrderComponent,
    DeleteOrderComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
