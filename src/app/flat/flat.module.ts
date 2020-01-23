import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlatComponent } from './flat.component';
import { FlatListComponent } from './flat-list/flat-list.component';
import { FlatListItemComponent } from './flat-list-item/flat-list-item.component';

import { FlatService } from './shared/flat.service';
import { FlatRoutingModule } from './flat-routing.module';
import { FlatDetailComponent } from './flat-detail/flat-detail.component';
import { SharedModule } from '../common/shared.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    FlatComponent,
    FlatListComponent,
    FlatListItemComponent,
    FlatDetailComponent],
  imports: [
    CommonModule,
    FlatRoutingModule,
    SharedModule,
    MaterialModule
  ],
  providers: [
    FlatService
  ]
})
export class FlatModule { }
