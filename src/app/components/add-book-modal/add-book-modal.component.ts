import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BookModel } from 'src/app/model/Book.model';

@Component({
  selector: 'app-add-book-modal',
  templateUrl: './add-book-modal.component.html',
  styleUrls: ['./add-book-modal.component.scss']
})
export class AddBookModalComponent implements OnInit {

  @Input() isOpen: boolean = true

  constructor(
    public dialogRef: MatDialogRef<AddBookModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb:FormBuilder,
    
  ) { }

  bookForm!: FormGroup;
  book = new BookModel()

  /**
   * init form
   */
  ngOnInit() {
    this.bookForm = this.fb.group({
      title: new FormControl('', Validators.required),
      id: new FormControl(''),
      status: new FormControl(true),
      authors: this.fb.array([this.getNewAuthor()])
    });
  }

  /**
   * 
   * @returns author model
   */
  getNewAuthor() {
    return  new FormGroup({
        name: new FormControl('', Validators.required)
      })
  }

  /**
   * push author to authors list
   */
  addNewAuthor() {
    this.authors.push(new FormGroup({
        name: new FormControl('', Validators.required)
      })
    );
  }

  /**
   * 
   * @param index remove author based on the index list
   */
  removeAuthor(index: number) {
    this.authors.removeAt(index);
  }

  get authors() {
    return this.bookForm.controls["authors"] as FormArray;
  }

  /**
   * 
   * @param form set model and close modal
   */
  onSubmit(form: FormGroup) {
    this.book.setId(new Date().getTime())
    this.book.setStatus(form.value.status);
    this.book.setAuthors(form.value.authors);
    this.book.setTitle(form.value.title);
    this.onNoClick();
  }

  onNoClick(): void {
    this.dialogRef.close({
      data: this.book
    });
  }
}
