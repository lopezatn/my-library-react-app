import React, { useState } from "react";
import "./EditBookForm.css";
import { useDispatch } from "react-redux";
import { editBook } from "../../features/books/bookSlice";

function EditBookForm({book, toggle}) {
  const dispatch = useDispatch();
  const [author, setAuthor] = useState(book.author);
  const [title, setTitle] = useState(book.title);
  const [pages, setPages] = useState(book.pages);
  const [errorMessage, setErrorMessage] = useState(null);

  const saveBook = (e) => {
    e.preventDefault();

    if (
      (author.length > 1 && typeof author === "string" &&
      title.length > 1 && typeof title === "string" &&
      pages > 0 && typeof pages === "number")
    ) {
      dispatch(editBook({ ...book, author, title, pages }));
      toggle(false);
    } else {
      setErrorMessage(true);
    }

    e.target.reset();
  };

  return (
    <form id="editBookForm" className="edit-book-form" onSubmit={saveBook}>
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
      { errorMessage ? 
      <p className="alert">Seems like one or more fields is missing information, please check.</p> 
      :
      <p>Book edited successfully! Click Cancel to go back.</p>
      }
      <button type="submit" data-testid="save-book">
        Save Book
      </button>

      <button type="button" onClick={() => toggle(false)}>
        Cancel
      </button>
    </form>
  );
}

export default EditBookForm;