import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/interfaces/Book.interface';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.scss']
})
export class MyListComponent implements OnInit {

  myList: Book[] = [];

  constructor(public bookService: BookService) {
    this.myList = this.bookService.myList;
  }

  ngOnInit(): void {
    this.bookService.getMyList()
      .subscribe((data: Book[]) => this.myList = data);
  }

}
