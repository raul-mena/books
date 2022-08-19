import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { takeUntil } from 'rxjs/operators';
import { Book } from 'src/app/interfaces/Book.interface';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject<void>();
  fullList: Book[] = [];

  constructor(public bookService: BookService) { }

  /**
   * subscribe and update current list to sow
   */
  ngOnInit(): void {
    this.bookService.getBooksObservable()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((data: Book[]) => {
        this.fullList = data;
      });
      this.bookService.refreshData()
  }

  /**
   * alternative way to unsuscribe
   */
  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
