import React from "react";
import "./AddBookForm.css";
import { useDispatch } from "react-redux";
import { addBook } from "../../features/books/bookSlice";

function AddBookForm() {
  const dispatch = useDispatch();

  const createBook = (e) => {
    e.preventDefault();

    const author = e.target.author.value;
    const title = e.target.book.value;
    const pages = parseInt(e.target.pages.value);
    const isRead = e.target.isRead.checked;
    const id = Math.floor(Math.random() * 900);

    dispatch(addBook({ author, title, pages, isRead, id }));

    e.target.reset();
  };

  return (
      <form id="addBookForm" className="add-book-form" onSubmit={createBook}>
        <div>
          <label htmlFor="author">Author:</label>
          <br />
          <input type="text" id="author" />
        </div>

        <div>
          <label htmlFor="book">Title:</label>
          <br />
          <input type="text" id="book" />
        </div>

        <div>
          <label htmlFor="pages">Pages:</label>
          <br />
          <input type="number" id="pages" />
        </div>

        <div>
          <label htmlFor="isRead">Read?</label>
          <br />
          <input type="checkbox" id="isRead" />
        </div>
        <button type="submit">Add Book</button>
      </form>
  );
}

export default AddBookForm;
