import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list.component';
import { RouterModule, Routes } from '@angular/router';
import { BookModule } from '../../components/book/book.module';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  { path: '**', component: BookListComponent },
];

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule.forChild(routes),
    BookModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  declarations: [
    BookListComponent
  ],
  exports: [RouterModule, BookListComponent],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    {provide: MatDialogRef, useValue:{}},
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}
    }
  ]
})
export class BookListModule { }
