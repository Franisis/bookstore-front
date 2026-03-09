import { API_URL } from "../../environments/environments"
import type { AuthorCreate,Author } from "../../Models/Authors";
import { ERRORS } from "../../Constants/Errors";

export async function getAuthors() {
    try {
        const response = await fetch(`${API_URL}/authors`)
        const data = await response.json();
        return data as Author[];
    } catch (error) {
        throw new Error(ERRORS.CREATE_AUTHOR);
    }
}

export async function getAuthorById(id: string) {
    try {
        const response = await fetch(`${API_URL}/authors/${id}`)
        const data = await response.json();
        if (!response.ok)
            {
                throw new Error(ERRORS.GET_AUTHORS);
            }
        return data as Author;
    } catch (error) {
        throw new Error(ERRORS.GET_AUTHORS);
    }
}

export async function createAuthor(author:AuthorCreate)
{
    try {
        const response = await fetch(`${API_URL}/authors`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(author)
        });
            if (!response.ok) {
                throw new Error(ERRORS.CREATE_AUTHOR);
            }
            const data = await response.json();
            return data as Author;
    } catch (error) {
        throw new Error(ERRORS.CREATE_AUTHOR);
    }
}

export async function updateAuthor(id: string, author: Author) {
    try {
        const response = await fetch(`${API_URL}/authors/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(author)
        });
        if (!response.ok) {
            throw new Error(ERRORS.UPDATE_AUTHOR);
        }
        const data = await response.json();
        return data as Author;
    } catch (error) {
        throw new Error(ERRORS.UPDATE_AUTHOR);
    }
}

export async function deleteAuthor(id: string) {
    try {
        const response = await fetch(`${API_URL}/authors/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error(ERRORS.DELETE_AUTHOR);
        }
    } catch (error) {
        throw new Error(ERRORS.DELETE_AUTHOR);
    }
}

