import { Author } from "./Author.interface";

export interface Book {
    id: number;
    title: string;
    author: Author[];
    languages: string[];
    formats: {
        'image/jpeg': string
    }
}

export interface BookApiResponse {
    count: number;
    results: any[];
}

