import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlatComponent } from './flat.component';
import { FlatListComponent } from './flat-list/flat-list.component';
import { FlatListItemComponent } from './flat-list-item/flat-list-item.component';
import { FlatDetailComponent } from './flat-detail/flat-detail.component';

const routes: Routes = [
  {
    path: 'flat',
    component: FlatComponent,
    children: [
      { path: '', component: FlatListComponent },
      { path: ':flatId', component: FlatDetailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlatRoutingModule { }
