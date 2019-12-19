import { NgModule } from '@angular/core';
import { MatInputModule, MatFormFieldModule, MatCheckboxModule, MatButtonModule, MatSnackBarModule, MatCardModule, MatDialogModule, MatSelectModule, MatToolbarModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';


const MATERIAL_MODULES = [
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatButtonModule,
  MatSnackBarModule,
  MatCheckboxModule,
  MatSelectModule,
  MatToolbarModule,
];

@NgModule({
  declarations: [],
  imports: [
  ],
  exports: [...MATERIAL_MODULES]
})
export class MaterialModule { }
