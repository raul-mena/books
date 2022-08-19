import { Author } from "./Author.interface";

/**
 * represent book object
 */
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

/**
 * Represent api respons
 */
export interface BookApiResponse {
    count: number;
    results: any[];
}

