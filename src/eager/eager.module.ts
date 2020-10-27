import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EagerRoutingModule } from './eager-routing.module';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    EagerRoutingModule
  ]
})
export class EagerModule { }
