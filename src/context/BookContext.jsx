import { useState, createContext } from "react";
import Book from "../data/Book";

export const BookContext = createContext(null);

const BookContextProvider = ({ children }) => {
    const [bookList, setBookList] = useState(Book);

    const addBook = (book) => {
        setBookList([...bookList, book]);
    }

    const value = {
        bookList,
        addBook
    };

    return <BookContext.Provider value={value}>{children}</BookContext.Provider>
}

export default BookContextProvider; 