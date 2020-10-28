import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrintService } from '../../app/print.service';

@Component({
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PurchaseOrderComponent implements OnInit {

  poIds: string[];
  poDetails: Promise<any>[];

  constructor(
    private route: ActivatedRoute,
    private printService: PrintService
  ) {
    this.poIds = route.snapshot.params[ 'poIds' ]
      .split( ',' );
  }

  ngOnInit() {
    this.poDetails = this.poIds
      .map( id => this.getPODetails( id ) );
    Promise.all( this.poDetails )
      .then( () => this.printService.onDataReady( 'lazy' ) );
  }

  getPODetails(
    poId
  ): Promise<any> {
    const amount = Math.floor( (Math.random() * 100) );
    return new Promise( resolve =>
      setTimeout( () => resolve( { amount } ), 1000 )
    );
  }
}
