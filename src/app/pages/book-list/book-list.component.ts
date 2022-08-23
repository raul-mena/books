import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs/internal/Subject';
import { takeUntil } from 'rxjs/operators';
import { AddBookModalComponent } from 'src/app/components/add-book-modal/add-book-modal.component';
import { Book } from 'src/app/interfaces/Book.interface';
import { BookModel } from 'src/app/model/Book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject<void>();
  fullList: Book[] = [];

  constructor(
    public bookService: BookService,
    public dialog: MatDialog
    ) { }

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

  /**
   * open modal and catch result to process data
   */
  openDialog(): void {
    const dialogRef = this.dialog.open(AddBookModalComponent, {
      width: '550px',
      height: '45%',
      data: {}
    });

    dialogRef.afterClosed().subscribe(({data}) => {
      if (data) {
        const book: Book = {
          id: data.id,
          title: data.title,
          authors: data.authors,
          status: data.status,
          formats: {
            'image/jpeg': 'https://www.gutenberg.org/cache/epub/74/pg74.cover.medium.jpg'
          },
          languages: [],
          subjects: []
        }
        this.bookService.addToGeneralList(book);
      }
    });
  }

}
