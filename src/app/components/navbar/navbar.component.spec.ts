import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookService } from 'src/app/services/book.service';
import { of } from 'rxjs/internal/observable/of';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports: [
        HttpClientModule
      ],
      providers: [BookService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be subscribed to books service', () => {
    spyOn(component.bookService, 'getBooksObservable').and.returnValue(of([]))
    spyOn(component.bookService, 'getMyListObservable').and.returnValue(of([]))
    component.ngOnInit();
    expect(component.bookService.getBooksObservable).toHaveBeenCalled();
    expect(component.bookService.getMyListObservable).toHaveBeenCalled();
  });

});
