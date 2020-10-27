import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrintLayoutComponent } from './print-layout/print-layout.component';
import { InvoiceComponent } from './invoice/invoice.component';
import {PrintService} from './print.service';
import { HomePage } from './home/home.page';
import { OtherPage } from './other/other.page';
import { PageLayoutComponent } from './page-layout/page-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    PrintLayoutComponent,
    InvoiceComponent,
    HomePage,
    OtherPage,
    PageLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PrintService],
  bootstrap: [AppComponent]
})
export class AppModule { }
