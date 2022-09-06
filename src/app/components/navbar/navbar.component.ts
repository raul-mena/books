import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { Book } from 'src/app/interfaces/Book.interface';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  private subscriptions = new Subscription();

  /**
   * define counter indicators
   */
  total: number = 0
  generalTotal: number = 0

  constructor(public bookService: BookService) { }

  ngOnInit(): void {
    this.subscriptions.add(
      this.bookService.getMyListObservable()
        .subscribe((data: Book[]) => this.total = data.length)
    );
    this.subscriptions.add(
      this.bookService.getBooksObservable()
        .subscribe((data: Book[]) => this.generalTotal = data.length)
    )
  }

  /**
   * unsubscribe to avoid Memory Leak
   */
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }
}
