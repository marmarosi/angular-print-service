import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrintService } from '../../app/print.service';

@Component({
  templateUrl: './customer-order.component.html',
  styleUrls: ['./customer-order.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerOrderComponent implements OnInit {

  coIds: string[];
  coDetails: Promise<any>[];

  constructor( route: ActivatedRoute,
               private printService: PrintService ) {
    this.coIds = route.snapshot.params[ 'coIds' ]
      .split( ',' );
  }

  ngOnInit() {
    this.coDetails = this.coIds
      .map( id => this.getCODetails( id ) );
    Promise.all( this.coDetails )
      .then( () => this.printService.onDataReady() );
  }

  getCODetails(
    coId
  ): Promise<any> {
    const amount = Math.floor( (Math.random() * 100) );
    return new Promise( resolve =>
      setTimeout( () => resolve( { amount } ), 1000 )
    );
  }
}
