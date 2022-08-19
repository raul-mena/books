import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Book, BookApiResponse } from '../interfaces/Book.interface';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private genelaListSubject = new Subject<Book[]>();
  private myListSubject = new Subject<Book[]>();
  // api to get mock data
  private url: string = 'https://gutendex.com/books/?page=';

  // inital state
  private generalList: Book[] = []

  // inital state
  private myList: Book[] = []

  constructor(private http: HttpClient) { }

  /**
   * 
   * @param page fetch to api and get response, let page param in case needs paginate to get more rows
   */
  fetchBooks(page: number = 1): void {
    this.http.get<BookApiResponse>(`${this.url}${page}`)
      .subscribe(({results, count}) => {
        this.generalList = results
        this.genelaListSubject.next(results);
      }, error => {})
  }

  /**
   * 
   * @returns observable to subscribe and get general book list updates
   */
  getBooksObservable(): Observable<Book[]> {
    return this.genelaListSubject.asObservable();
  }

  /**
   * 
   * @returns observable to subscribe and get my list updates
   */
  getMyListObservable(): Observable<Book[]> {
    return this.myListSubject.asObservable();
  }

  /**
   * 
   * @param book Remove book object from general book list and add it to my list
   */
  addToMyList(book: Book): void {
    const index = this.generalList.findIndex(item => item.id === book.id);
    this.myList.push(this.generalList[index]);
    this.generalList.splice(index, 1);
    this.refreshData();
  }

  /**
   * 
   * @param book Remove book object from my list and add it to general book list
   */
  removeFromMyList(book: Book): void {
    const index = this.myList.findIndex(item => item.id === book.id);
    this.generalList.push(this.myList[index]);
    this.myList.splice(index, 1);
    this.refreshData();
  }

  /**
   * trigger subscribe fucntions on the components
   */
  refreshData(): void {
    this.genelaListSubject.next(this.generalList);
    this.myListSubject.next(this.myList);
  }
}
