import { Component, OnInit } from '@angular/core';
import { BookService } from './services/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  
  title = 'books';

  constructor(public bookServece: BookService) {}
  
  ngOnInit(): void {
    this.bookServece.getBooks();
  }
}
