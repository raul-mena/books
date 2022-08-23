import { Author } from "../interfaces/Author.interface";

export class BookModel {
    private id: number;
    private formats: object;
    private title: string;
    private authors: Author[];
    private status: boolean;

    constructor(
        id: number = 0,
        formats: object = {},
        title: string = '',
        authors: Author[] = [],
        status: boolean = true
    ) {
      this.id = id;
      this.title = title;
      this.authors = authors;
      this.status = status;
      this.formats = formats;
    }

    public getId(): number {
        return this.id;
    }

    public setId(value: number) {
        this.id = value;
    }

    public getTitle(): string {
        return this.title;
    }

    public setTitle(value: string) {
        this.title = value;
    }

    public getAuthors(): Author[] {
        return this.authors;
    }

    public setAuthors(value: Author[]) {
        this.authors = value;
    }

    public getStatus(): boolean {
        return this.status;
    }

    public setStatus(value: boolean) {
        this.status = value;
    }

    public getFormats(): object {
        return this.formats;
    }

    public setFormats(value: object) {
        this.formats = value;
    }
}