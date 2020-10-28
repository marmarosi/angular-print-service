import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexPage } from './index/index.page';
import { PrintLayoutComponent } from '../app/print-layout/print-layout.component';
import { CustomerOrderComponent } from './customer-order/customer-order.component';

const routes: Routes = [
  {
    path: '',
    component: IndexPage
  }, {
    path: 'print',
    outlet: 'print',
    component: PrintLayoutComponent,
    children: [
      { path: 'co/:coIds', component: CustomerOrderComponent }
    ]
  }
];

@NgModule( {
  imports: [RouterModule.forChild( routes )],
  exports: [RouterModule]
} )
export class EagerRoutingModule {
}
