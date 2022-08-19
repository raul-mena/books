import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { Book } from 'src/app/interfaces/Book.interface';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.scss']
})
export class MyListComponent implements OnInit, OnDestroy {
  private subscriptions = new Subscription();
  myList: Book[] = [];

  constructor(public bookService: BookService) { }
  
  /**
   * subscribe and update current list to sow
   */
  ngOnInit(): void {
    this.subscriptions = this.bookService.getMyListObservable()
      .subscribe((data: Book[]) => {
        this.myList = data;
      })
      this.bookService.refreshData();
  }
  /**
   * unsubscribe to clean memory
   */
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }

}
