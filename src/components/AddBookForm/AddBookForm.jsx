import React from "react";
import './AddBookForm.css';

function AddBookForm() {
  const createBook = () => {};

  return (
    <>
      <form id="addBookForm" className="add-book-form">
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
        <button onClick={() => createBook()}>Add Book</button>
      </form>
    </>
  );
}

export default AddBookForm;
