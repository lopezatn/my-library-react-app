import React from "react";
import './AddBookForm.css';
import { useSelector, useDispatch } from "react-redux";
import { addBook, removeBook } from "../../features/books/bookSlice";


function AddBookForm() {

  const createBook = (e) => {
    e.preventDefault();

    const author = e.target.author.value;
    const book = e.target.book.value;     
    const pages = e.target.pages.value;
    const isRead = e.target.isRead.checked;


  };

  return (
    <>
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
    </>
  );
}

export default AddBookForm;
