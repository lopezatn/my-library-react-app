import React from "react";
import "./BooksTable.css";
import { useSelector } from "react-redux";
import IsReadButton from "../IsReadButton/IsReadButton";
import DeleteItemButton from "../DeleteItemButton/DeleteItemButton";
import ToggleFormButton from "../ToggleFormButton/ToggleFormButton";
import BookForm from "../BookForm/BookForm";

function BooksTable() {
  const books = useSelector((state) => state.books.booksList);

  return (
    <div className="table-container">
      <table id="books-table">
        <thead>
          <tr>
            <th>Author</th>
            <th>Title</th>
            <th>Pages</th>
            <th>Read</th>
            <th>Remove</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id} data-testid="book-testid">
              <td data-testid="book-author-testid">{book.author}</td>
              <td data-testid="book-title-testid">{book.title}</td>
              <td data-testid="book-pages-testid">{book.pages}</td>
              <td><IsReadButton isRead={book.isRead} id={book.id}/></td>
              <td><DeleteItemButton id={book.id}/></td>
              <td><ToggleFormButton book={book} buttonText={"EDIT"} FormComponent={BookForm}/></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BooksTable;
