import React, { useState } from "react";
import "./BookForm.css";
import { useDispatch } from "react-redux";
import { addBook } from "../../features/books/bookSlice";

function BookForm({ toggle }) {
  const dispatch = useDispatch();
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [pages, setPages] = useState(0);
  const [isRead, setIsRead] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(null);
  const id = Math.floor(Math.random() * 900);

  const restartFields = () => {
    setAuthor("");
    setTitle("");
    setPages(0);
  };

  const createBook = (e) => {
    e.preventDefault();

    if (
      author.length > 1 &&
      typeof author === "string" &&
      title.length > 1 &&
      typeof title === "string" &&
      pages > 0 &&
      typeof pages === "number"
    ) {
      dispatch(addBook({ author, title, pages, isRead, id }));
      restartFields();
      setShowErrorMessage(false);
    } else {
      setShowErrorMessage(true);
    }

    // e.target.reset();
  };

  return (
    <form id="bookForm" className="book-form" onSubmit={createBook}>
      <div>
        <label htmlFor="author">Author:</label>
        <br />
        <input
          type="text"
          id="author"
          data-testid="author"
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="book">Title:</label>
        <br />
        <input
          type="text"
          id="book"
          data-testid="title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="pages">Pages:</label>
        <br />
        <input
          type="number"
          id="pages"
          data-testid="pages"
          onChange={(e) => setPages(parseInt(e.target.value))}
        />
      </div>

      <div className="is-read-button">
        <label htmlFor="isRead">Read?</label>
        <br />
        <input
          type="checkbox"
          id="isRead"
          data-testid="read"
          onChange={(e) => setIsRead(e.target.checked)}
        />
      </div>

      {showErrorMessage !== null ? (
        showErrorMessage !== false ? (
          <p>
            Seems like one or more fields are missing information, please check.
          </p>
        ) : (
          <p>Book added successfully! Click Cancel to go back.</p>
        )
      ) : null}

      <button type="submit" data-testid="add-book">
        Add Book
      </button>
      <button onClick={() => toggle(false)}>Cancel</button>
    </form>
  );
}

export default BookForm;
