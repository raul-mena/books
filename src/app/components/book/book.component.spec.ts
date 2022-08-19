import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookService } from 'src/app/services/book.service';

import { BookComponent } from './book.component';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookComponent ],
      imports: [
        HttpClientModule
      ],
      providers: [BookService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should send book to my list', () => {
    expect(component).toBeTruthy();
    spyOn(component.bookService, 'addToMyList');
    component.handleChange();
    expect(component.bookService.addToMyList).toHaveBeenCalled();
  });

  it('should remove book from my list', () => {
    expect(component).toBeTruthy();
    spyOn(component.bookService, 'removeFromMyList');
    component.isInMyList = true;
    component.handleChange();
    expect(component.bookService.removeFromMyList).toHaveBeenCalled();
  });
});
