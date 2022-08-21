import { Component, Input } from '@angular/core';
import { Book } from 'src/app/interfaces/Book.interface';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  /**
   * required information to print book card
   */
  @Input() data: Book = {
    title: '',
    authors: [],
    subjects: [],
    id: 0,
    languages: [],
    formats: {
      'image/jpeg': ''
    }
  };
  /**
   * flag to check to defaine action on the button
   */
  @Input() isInMyList: boolean = false;
  
  constructor(public bookService: BookService) { }

  /**
   * handle action to remove or add in my list
   */
  handleChange() {
    if (this.isInMyList) {
      this.bookService.removeFromMyList(this.data);
    } else {
      this.bookService.addToMyList(this.data);
    }
  }

}
