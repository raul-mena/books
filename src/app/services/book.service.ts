import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookApiResponse } from '../interfaces/Book.interface';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  data: BookApiResponse = {
    count: 0,
    results: []
  }

  constructor(private http: HttpClient) { }

  getBooks(page: number = 1): void {
    this.http.get<BookApiResponse>(`https://gutendex.com/books/?page=${page}`)
      .subscribe(response => {
        console.log('data --->', response)
      }, error => {})
  }
}
