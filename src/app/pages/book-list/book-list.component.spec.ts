import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookService } from 'src/app/services/book.service';
import { mockBookService } from 'src/app/services/book.service.spec';
import { of } from 'rxjs/internal/observable/of';
import { BookListComponent } from './book-list.component';

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookListComponent ],
      imports: [
        HttpClientModule
      ],
      providers: [{
        provider: BookService, useValue: mockBookService
      }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call book service', () => {
    spyOn(component.bookService, 'getBooksObservable').and.returnValue(of([]))
    component.ngOnInit();
    expect(component.bookService.getBooksObservable).toHaveBeenCalled();
  });
});
