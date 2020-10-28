import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { EagerModule } from '../eager/eager.module';
import { AppComponent } from './app.component';

import { HomePage } from './home/home.page';
import { OtherPage } from './other/other.page';

import { PrintLayoutComponent } from './print-layout/print-layout.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { WaybillComponent } from './waybill/waybill.component';

import { PrintService } from './print.service';

@NgModule( {
  declarations: [
    AppComponent,
    PrintLayoutComponent,
    InvoiceComponent,
    HomePage,
    OtherPage,
    WaybillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EagerModule
  ],
  providers: [PrintService],
  bootstrap: [AppComponent]
} )
export class AppModule {
}
