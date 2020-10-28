import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PrintService } from '../print.service';

@Component( {
  templateUrl: './other.page.html',
  styleUrls: ['./other.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class OtherPage {

  constructor(
    public printService: PrintService
  ) { }

  onPrintInvoice() {
    const invoiceIds = ['101', '102'];
    this.printService
      .printDocument( 'invoice', invoiceIds );
  }
}
