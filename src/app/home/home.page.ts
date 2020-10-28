import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PrintService } from '../print.service';

@Component({
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage {
  title = 'angular-print-service';

  constructor(
    public printService: PrintService
  ) { }

  onPrintInvoice(): void {
    const invoiceIds = ['101', '102'];
    this.printService
      .printDocument('invoice', invoiceIds);
  }

  onPrintWaybill(): void {
    const waybillIds = ['WB-2020/123456', 'WB-2020/123457'];
    this.printService
      .printDocument('waybill', waybillIds);
  }
}
