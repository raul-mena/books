import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs/internal/observable/of';
import { Book } from '../interfaces/Book.interface';

import { BookService } from './book.service';

export const mockBookService = {
  fetchBooks: (page: number = 1): void => { },
  getBooksObservable: () => { 
    return of([]);
  },
  getMyListObservable() { 
    return of([]);
  },
  addToMyList: (book: Book): void => { },
  removeFromMyList(book: Book): void { }
}

describe('BookService', () => {
  let service: BookService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(BookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
