import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/interfaces/Book.interface';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  total: number = 0
  generalTotal: number = 0

  constructor(public bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getMyList()
      .subscribe((data: Book[]) => this.total = data.length);
    this.bookService.getBooks()
      .subscribe((data: Book[]) => this.generalTotal = data.length);
  }

}
