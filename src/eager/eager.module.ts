import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EagerRoutingModule } from './eager-routing.module';
import { IndexPage } from './index/index.page';


@NgModule( {
  declarations: [
    IndexPage
  ],
  imports: [
    CommonModule,
    EagerRoutingModule
  ]
} )
export class EagerModule { }
