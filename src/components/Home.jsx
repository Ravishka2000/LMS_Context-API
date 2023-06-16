import React, { useContext } from "react";
import NavBar from './NavBar'
import { BookContext } from "../context/BookContext";
const Home = () => {

    const { bookList } = useContext(BookContext)

    return (
        <div>
            <NavBar />
            <h1>Home</h1>
            <div style={{ display: 'flex' }}>
                <div>
                    <h2>Books</h2>
                    <table style={{}}>
                        <thead>
                            <tr>
                                <th>Book Name</th>
                                <th>Author</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookList.map((book) => (
                                <tr key={book.id}>
                                    <td>{book.title}</td>
                                    <td>{book.author}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div>

                </div>
            </div>
        </div>
    )
}

export default Home;