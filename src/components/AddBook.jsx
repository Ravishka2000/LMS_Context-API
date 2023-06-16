import { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";
import NavBar from "./NavBar";

const Addbook = () => {
    const { addBook, bookList } = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const book = {
            id: bookList.length + 1,
            title,
            author
        };
        addBook(book)
    }

    return(
        <div>
            <NavBar/>
            <h2>Add Book</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input type="text" name="title" onChange={(e) => setTitle(e.target.value)}/>
                <br/>
                <label htmlFor="author">Author:</label>
                <input type="text" name="author" onChange={(e) => setAuthor(e.target.value)}/>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
        </div>

    )
}

export default Addbook;