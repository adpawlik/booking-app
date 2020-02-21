import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlatComponent } from './flat.component';
import { FlatListComponent } from './flat-list/flat-list.component';
import { FlatDetailComponent } from './flat-detail/flat-detail.component';
import { FlatCreateComponent } from './flat-create/flat-create.component';

const routes: Routes = [
  {
    path: 'flat',
    component: FlatComponent,
    children: [
      { path: '', component: FlatListComponent },
      { path: 'new', component: FlatCreateComponent },
      { path: ':flatId', component: FlatDetailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlatRoutingModule { }
