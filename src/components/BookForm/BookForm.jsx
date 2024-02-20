import React, { useState } from "react";
import "./BookForm.css";
import { useDispatch } from "react-redux";
import { addBook, editBook } from "../../redux/slices/books/bookSlice";

function BookForm({ book, toggle }) {
  const dispatch = useDispatch();
  const [author, setAuthor] = useState(book?.author ?? "");
  const [title, setTitle] = useState(book?.title ?? "");
  const [pages, setPages] = useState(book?.pages ?? undefined);
  const [isRead, setIsRead] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(null);
  const isCreatingBook = book?.id === undefined;
  let newId = undefined;

  const restartFields = () => {
    setAuthor("");
    setTitle("");
    setPages(0);
  };

  const handleSubmit = (e) => {
    if (isCreatingBook) {
      e.preventDefault();
      newId = Math.floor(Math.random() * 900);

      if (
        author.length > 1 &&
        typeof author === "string" &&
        title.length > 1 &&
        typeof title === "string" &&
        pages !== undefined &&
        typeof pages === "number"
      ) {
        dispatch(addBook({ author, title, pages, isRead, id: newId }));
        saveInLocalStorage();
        restartFields();
        setShowErrorMessage(false);
      } else {
        setShowErrorMessage(true);
      }
    } else {
      e.preventDefault();

      if (
        author.length > 1 &&
        typeof author === "string" &&
        title.length > 1 &&
        typeof title === "string" &&
        pages !== undefined &&
        typeof pages === "number"
      ) {
        dispatch(editBook({ ...book, author, title, pages }));
        setShowErrorMessage(false);
      } else {
        setShowErrorMessage(true);
      }

    }
  };

  const saveInLocalStorage = () => {
    const storedData = localStorage.getItem('bookData');
    const existingData = storedData ? JSON.parse(storedData) : {books: { booksList: [] }};
    existingData.books.booksList.push({author, title, pages, isRead, id: newId});
    localStorage.setItem('bookData', JSON.stringify(existingData));
    window.dispatchEvent(new Event('storage'));
  }


  return (
    <form id="bookForm" className="book-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="author">Author:</label>
        <br />
        <input
          type="text"
          id="author"
          data-testid="author"
          value={author}
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
          value={title}
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
          value={pages}
          onChange={(e) => setPages(parseInt(e.target.value))}
        />
      </div>

      {/* This is hidden if there is no book ID */}
      {isCreatingBook ? (
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
      ) : ''}

      {isCreatingBook ? (
        showErrorMessage !== null ? (
          showErrorMessage !== false ? (
            <p>
              Seems like one or more fields are missing information, please
              check.
            </p>
          ) : (
            <p>Book added successfully! Click Cancel to go back.</p>
          )
        ) : ''
      ) : showErrorMessage !== null ? (
        showErrorMessage !== false ? (
          <p>
            Seems like one or more fields are missing information, please check.
          </p>
        ) : (
          <p>Book edited successfully! Click Cancel to go back.</p>
        )
      ) : ''}

      <button type="submit">
        {isCreatingBook ? "Add Book" : "Edit Book"}
      </button>
      <button onClick={() => toggle(false)}>Cancel</button>
    </form>
  );
}

export default BookForm;
