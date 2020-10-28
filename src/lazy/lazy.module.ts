import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { IndexPage } from './index/index.page';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';

@NgModule( {
  declarations: [
    IndexPage,
    PurchaseOrderComponent
  ],
  imports: [
    CommonModule,
    LazyRoutingModule
  ]
} )
export class LazyModule { }
