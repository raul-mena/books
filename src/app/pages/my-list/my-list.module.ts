import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyListComponent } from './my-list.component';
import { RouterModule, Routes } from '@angular/router';
import { BookModule } from 'src/app/components/book/book.module';

const routes: Routes = [
  { path: '', component: MyListComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BookModule
  ],
  declarations:[MyListComponent],
  exports: [RouterModule]
})
export class MyListModule { }
