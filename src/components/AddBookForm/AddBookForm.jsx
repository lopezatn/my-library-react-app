import React from "react";
import "./AddBookForm.css";
import { useDispatch } from "react-redux";
import { addBook } from "../../features/books/bookSlice";

function AddBookForm() {
  const dispatch = useDispatch();

  const createBook = (e) => {
    e.preventDefault();

    console.log(e.target)
    const author = e.target.author?.value;
    const title = e.target.book?.value;
    const pages = parseInt(e.target.pages?.value);
    const isRead = e.target.isRead?.checked;
    const id = Math.floor(Math.random() * 900);

    dispatch(addBook({ author, title, pages, isRead, id }));

    e.target.reset();
  };

  return (
      <form id="addBookForm" className="add-book-form" onSubmit={createBook}>
        <div>
          <label htmlFor="author">Author:</label>
          <br />
          <input type="text" id="author" data-testid="author" />
        </div>

        <div>
          <label htmlFor="book">Title:</label>
          <br />
          <input type="text" id="book" data-testid="title" />
        </div>

        <div>
          <label htmlFor="pages">Pages:</label>
          <br />
          <input type="number" id="pages" data-testid="pages" />
        </div>

        <div>
          <label htmlFor="isRead">Read?</label>
          <br />
          <input type="checkbox" id="isRead" data-testid="read" />
        </div>
        <button type="submit" data-testid="add-book">Add Book</button>
      </form>
  );
}

export default AddBookForm;
