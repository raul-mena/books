import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book, BookApiResponse } from 'src/app/interfaces/Book.interface';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  
  fullList: Book[] = [];

  constructor(public bookService: BookService) {
    this.fullList = this.bookService.generalList;
   }

  ngOnInit(): void {
    this.bookService.getBooks()
      .subscribe((data: Book[]) => this.fullList = data);
  }
}
