import { Author } from "./Author.interface";

export interface Book {
    id: number;
    title: string;
    authors: Author[];
    languages: string[];
    formats: {
        'image/jpeg': string
    },
    subjects: string[];
}

export interface BookApiResponse {
    count: number;
    results: any[];
}

