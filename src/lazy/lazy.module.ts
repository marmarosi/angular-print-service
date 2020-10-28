import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { IndexPage } from './index/index.page';

@NgModule( {
  declarations: [
    IndexPage
  ],
  imports: [
    CommonModule,
    LazyRoutingModule
  ]
} )
export class LazyModule { }
