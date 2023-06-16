import { useState, createContext } from "react";
import Book from "../data/Book";

export const BookContext = createContext(null);

const BookContextProvider = ({ children }) => {
    const [bookList, setBookList] = useState(Book);

    const addBook = (book) => {
        setBookList([...bookList, book]);
    }

    const deleteBook = (id) => {
        setBookList(bookList.filter((book) => book.id !== id));
    };

    const updateBook = (id, updatedBook) => {
        setBookList(
            bookList.map((book) => (book.id === id ? updatedBook : book))
        );
    };

    const getBookById = (id) => {
        setBook(bookList.find((book) => book.id === id));
    };

    const value = {
        bookList,
        addBook,
        deleteBook,
        updateBook,
        getBookById,
    };

    return <BookContext.Provider value={value}>{children}</BookContext.Provider>
}

export default BookContextProvider; 