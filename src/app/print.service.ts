import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable( {
  providedIn: 'root'
} )
export class PrintService {
  isPrinting = false;

  constructor(
    private router: Router
  ) {
  }

  printDocument(
    documentName: string,
    documentData: string[],
    path = ''
  ): void {
    this.isPrinting = true;
    this.router.navigate( [ `/${ path }`, {
      outlets: {
        print: [ 'print', documentName, documentData.join() ]
      }
    } ] );
  }

  onDataReady(
    path = ''
  ): void {
    setTimeout( () => {
      window.print();
      this.isPrinting = false;
      const emptyOutlets = {
        outlets: {
          print: null
        }
      };
      if (path) {
        this.router.navigate( [ `/${ path }`, emptyOutlets ] );
      } else {
        this.router.navigate( [ emptyOutlets ] );
      }
    } );
  }
}
