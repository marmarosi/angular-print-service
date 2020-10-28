import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexPage } from './index/index.page';
import { PrintLayoutComponent } from '../app/print-layout/print-layout.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';

const routes: Routes = [
  {
    path: '',
    component: IndexPage
  }, {
    path: 'print',
    outlet: 'print',
    component: PrintLayoutComponent,
    children: [
      { path: 'po/:poIds', component: PurchaseOrderComponent }
    ]
  }
];

@NgModule( {
  imports: [RouterModule.forChild( routes )],
  exports: [RouterModule]
} )
export class LazyRoutingModule { }
