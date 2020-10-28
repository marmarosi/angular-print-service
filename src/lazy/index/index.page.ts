import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PrintService } from '../../app/print.service';

@Component({
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndexPage {

  constructor(
    public printService: PrintService
  ) { }

  onPrintInvoice() {
    const invoiceIds = ['101', '102'];
    this.printService
      .printDocument('invoice', invoiceIds);
  }

  onPrintWaybill(): void {
    const waybillIds = ['WB-2020/123456', 'WB-2020/123457'];
    this.printService
      .printDocument('waybill', waybillIds);
  }

  onPrintCO(): void {
    const coIds = ['1', '2'];
    this.printService
      .printDocument( 'co', coIds );
  }

  onPrintPO(): void {
    const poIds = ['1', '2'];
    this.printService
      .printDocument( 'po', poIds, 'lazy' );
  }
}
