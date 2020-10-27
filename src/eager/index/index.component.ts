import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PrintService } from '../../app/print.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndexComponent implements OnInit {
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
