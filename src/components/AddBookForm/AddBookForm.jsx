import React, { useEffect, useState } from "react";
import "./AddBookForm.css";
import { useDispatch } from "react-redux";
import { addBook } from "../../features/books/bookSlice";

function AddBookForm() {
  const dispatch = useDispatch();
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [pages, setPages] = useState(0);
  const [isRead, setIsRead] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const id = Math.floor(Math.random() * 900);

  useEffect(() => {
      if (
        (author.length > 1 && typeof author === 'string',
        title.length > 1 && typeof title === 'string',
        pages > 0 && typeof pages === 'number')
      ) {
        setIsDisabled(false);
      }
      
  },[author, title, pages]);

  const restartFields = () => {
    setAuthor('');
    setTitle('');
    setPages(0);
  }

  const createBook = (e) => {
    e.preventDefault();

    if (
      (author.length > 1 && typeof author === 'string',
      title.length > 1 && typeof title === 'string',
      pages > 0 && typeof pages === 'number')
    ) {
      dispatch(addBook({ author, title, pages, isRead, id }));
      restartFields();
    } else {
      alert(
        "Seems like one or more fields is missing information, please check."
      );
    }

    e.target.reset();
  };

  return (
    <form id="addBookForm" className="add-book-form" onSubmit={createBook}>
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

      <div>
        <label htmlFor="isRead">Read?</label>
        <br />
        <input
          type="checkbox"
          id="isRead"
          data-testid="read"
          onChange={(e) => setIsRead(e.target.checked)}
        />
      </div>
      <button type="submit" data-testid="add-book" disabled={isDisabled}>
        Add Book
      </button>
    </form>
  );
}

export default AddBookForm;
