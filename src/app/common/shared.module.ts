import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LoaderComponent } from './loader/loader.component';
import { AppRoutingModule } from '../app-routing.module';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LoaderComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent,
    LoaderComponent,
    MapComponent
  ]
})
export class SharedModule { }
