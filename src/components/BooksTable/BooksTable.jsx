import React from "react";
import "./BooksTable.css";
import { useDispatch, useSelector } from "react-redux";
import IsReadButton from "../IsReadButton/IsReadButton";
import DeleteItemButton from "../DeleteItemButton/DeleteItemButton";

function BooksTable() {
  const books = useSelector((state) => state.books.booksList);
  const dispatch = useDispatch();

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
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.author}</td>
              <td>{book.title}</td>
              <td>{book.pages}</td>
              <td><IsReadButton isRead={book.isRead} id={book.id}/></td>
              <td><DeleteItemButton id={book.id}/></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BooksTable;
