import { useContext, useEffect, useState } from "react";
import { BookContext } from "../context/BookContext";
import NavBar from "./NavBar";
import { useParams } from "react-router-dom";

const UpdateBook = () => {
    const { id } = useParams();
  const { updateBook, bookList } = useContext(BookContext);

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {
      id,
      title,
      author,
    };
    console.log(book);
    updateBook(id, book);
  };

  return (
    <div>
      <NavBar />
      <h2>Update Book</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <br />
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          name="author"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default UpdateBook;