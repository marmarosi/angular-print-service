import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EagerRoutingModule } from './eager-routing.module';
import { IndexPage } from './index/index.page';
import { CustomerOrderComponent } from './customer-order/customer-order.component';

@NgModule( {
  declarations: [
    IndexPage,
    CustomerOrderComponent
  ],
  imports: [
    CommonModule,
    EagerRoutingModule
  ]
} )
export class EagerModule { }
