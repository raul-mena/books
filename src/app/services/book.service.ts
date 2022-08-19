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
  generalList: Book[] = []

  // inital state
  myList: Book[] = []

  constructor(private http: HttpClient) { }

  fetchBooks(page: number = 1): void {
    this.http.get<BookApiResponse>(`${this.url}${page}`)
      .subscribe(({results, count}) => {
        this.generalList = results
        this.genelaListSubject.next(results);
      }, error => {})
  }

  /**
   * 
   * @returns 
   */
  getBooks(): Observable<Book[]> {
    return this.genelaListSubject.asObservable();
  }

  /**
   * 
   * @returns 
   */
  getMyList(): Observable<Book[]> {
    return this.myListSubject.asObservable();
  }

  /**
   * 
   * @param book 
   */
  addToMyList(book: Book): void {
    const index = this.generalList.findIndex(item => item.id === book.id);
    this.myList.push(this.generalList[index]);
    this.generalList.splice(index, 1);
    this.updateLists();
  }

  /**
   * 
   * @param book 
   */
  removeFromMyList(book: Book): void {
    const index = this.myList.findIndex(item => item.id === book.id);
    this.generalList.push(this.myList[index]);
    this.myList.splice(index, 1);
    this.updateLists();
  }

  /**
   * 
   */
  private updateLists(): void {
    this.genelaListSubject.next(this.generalList);
    this.myListSubject.next(this.myList);
  }
}
