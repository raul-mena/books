import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookService } from 'src/app/services/book.service';
import { of } from 'rxjs/internal/observable/of';
import { MyListComponent } from './my-list.component';

describe('MyListComponent', () => {
  let component: MyListComponent;
  let fixture: ComponentFixture<MyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyListComponent ],
      imports: [
        HttpClientModule
      ],
      providers: [BookService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call book service', () => {
    spyOn(component.bookService, 'getMyListObservable').and.returnValue(of([]))
    component.ngOnInit();
    expect(component.bookService.getMyListObservable).toHaveBeenCalled();
  });

  it('should have empty arry for default', () => {
    expect(component).toBeTruthy();
    expect(component.myList.length).toEqual(0);
  });
});
