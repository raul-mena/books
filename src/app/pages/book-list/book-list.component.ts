import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookApiResponse } from 'src/app/interfaces/Book.interface';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  allData$!: Observable<BookApiResponse>;

  constructor(public bookService: BookService) { }

  ngOnInit(): void {
  }
}
