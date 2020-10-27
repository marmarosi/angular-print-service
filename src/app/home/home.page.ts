import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PrintService } from '../print.service';

@Component({
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage implements OnInit {
  title = 'angular-print-service';

  constructor(public printService: PrintService) { }

  onPrintInvoice() {
    const invoiceIds = ['101', '102'];
    this.printService
      .printDocument('invoice', invoiceIds);
  }

  ngOnInit(): void {
  }

}
