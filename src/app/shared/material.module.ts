import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatIconModule,
  MatPaginatorModule,
  MatSortModule,
  MatCheckboxModule,
  MatSnackBarModule,
} from '@angular/material';


@NgModule({
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatSnackBarModule,
]
})
export class MaterialModule { }

