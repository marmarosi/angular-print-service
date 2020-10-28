import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceComponent } from './invoice/invoice.component';
import { PrintLayoutComponent } from './print-layout/print-layout.component';
import { HomePage } from './home/home.page';
import { OtherPage } from './other/other.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }, {
    path: 'home',
    component: HomePage
  }, {
    path: 'other',
    component: OtherPage
  }, {
    path: 'eager',
    loadChildren: () => import('../eager/eager.module').then(m => m.EagerModule)
  }, {
    path: 'lazy',
    loadChildren: () => import('../lazy/lazy.module').then(m => m.LazyModule)
  }, {
    path: 'print',
    outlet: 'print',
    component: PrintLayoutComponent,
    children: [
      { path: 'invoice/:invoiceIds', component: InvoiceComponent }
    ]
  }
];

@NgModule( {
  imports: [RouterModule.forRoot( routes )],
  exports: [RouterModule]
} )
export class AppRoutingModule {
}
