import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FlatComponent } from './flat.component';
import { FlatListComponent } from './flat-list/flat-list.component';
import { FlatListItemComponent } from './flat-list-item/flat-list-item.component';

import { FlatService } from './shared/flat.service';
import { FlatRoutingModule } from './flat-routing.module';
import { FlatDetailComponent } from './flat-detail/flat-detail.component';
import { SharedModule } from '../common/shared.module';
import { MaterialModule } from '../material/material.module';
import { FlatCreateComponent } from './flat-create/flat-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlatSearchComponent } from './flat-search/flat-search.component';

@NgModule({
  declarations: [
    FlatComponent,
    FlatListComponent,
    FlatListItemComponent,
    FlatDetailComponent,
    FlatCreateComponent,
    FlatSearchComponent
  ],
  imports: [
    CommonModule,
    FlatRoutingModule,
    SharedModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FlatSearchComponent
  ],
  providers: [
    FlatService
  ]
})
export class FlatModule { }
