import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrintService } from '../print.service';

@Component( {
  selector: 'app-waybill',
  templateUrl: './waybill.component.html',
  styleUrls: ['./waybill.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class WaybillComponent implements OnInit {

  waybillIds: string[];
  waybillDetails: Promise<any>[];

  constructor( route: ActivatedRoute,
               private printService: PrintService ) {
    this.waybillIds = route.snapshot.params[ 'waybillIds' ]
      .split( ',' );
  }

  ngOnInit() {
    this.waybillDetails = this.waybillIds
      .map( id => this.getWaybillDetails( id ) );
    Promise.all( this.waybillDetails )
      .then( () => this.printService.onDataReady() );
  }

  getWaybillDetails(
    waybillId
  ): Promise<any> {
    const amount = Math.floor( (Math.random() * 100) );
    return new Promise( resolve =>
      setTimeout( () => resolve( { amount } ), 1000 )
    );
  }
}
