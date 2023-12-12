import React from "react";
import "./Index.css";
import Header from "../Header/Index";

export default function Main() {
  const toggleFormVisibility = () => {
    let form = document.getElementById("addBookForm");
    form.style.display = form.style.display === "block" ? "none" : "block";
  };

  const createBook = () => {

  };

  return (
    <div>
      <Header />

      <main>
        <div className="new-book">
          <button id="toggleButton" onClick={() => toggleFormVisibility()}>
            New Book
          </button>
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
        </div>
        <div className="table-container">
          <table id="books-table">
            <tr>
              <th>Author</th>
              <th>Title</th>
              <th>Pages</th>
              <th>Read</th>
              <th>Remove</th>
            </tr>
          </table>
        </div>
      </main>

      <footer>
        <p>© The Kreativs</p>
      </footer>
    </div>
  );
}
