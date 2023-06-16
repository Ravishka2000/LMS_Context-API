import React, { useContext } from "react";
import NavBar from "./NavBar";
import { BookContext } from "../context/BookContext";
import { Link } from "react-router-dom";

const Books = () => {

    const { bookList, deleteBook } = useContext(BookContext)

    const handleDelete = (id) => () => {
        deleteBook(id);
    }

    return(
        <div>
            <NavBar/>
            <h1>All Books</h1>
            <Link to={'/add'} >Add Book</Link>
            <div>
                    <h2>Books</h2>
                    <table style={{}}>
                        <thead>
                            <tr>
                                <th>Book Name</th>
                                <th>Author</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookList.map((book) => (
                                <tr key={book.id}>
                                    <td>{book.title}</td>
                                    <td>{book.author}</td>
                                    <td>
                                        <button>Edit</button>
                                        <button onClick={handleDelete(book.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
        </div>
    )
}

export default Books;