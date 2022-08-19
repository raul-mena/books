import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    BookComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    BookComponent
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class BookModule {  }

