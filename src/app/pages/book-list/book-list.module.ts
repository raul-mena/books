import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list.component';
import { RouterModule, Routes } from '@angular/router';
import { BookModule } from '../../components/book/book.module';
import { MatCardModule } from '@angular/material/card';

const routes: Routes = [
  { path: '**', component: BookListComponent },
];

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule.forChild(routes),
    BookModule
  ],
  declarations: [
    BookListComponent
  ],
  exports: [RouterModule, BookListComponent],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class BookListModule { }
