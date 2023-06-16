import React, { useContext } from "react";
import NavBar from "./NavBar";
import { BookContext } from "../context/BookContext";

const Books = () => {

    const { bookList } = useContext(BookContext)

    return(
        <div>
            <NavBar/>
            <h1>All Books</h1>
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
                                        <button>Delete</button>
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