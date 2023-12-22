import React from "react";
import "./BooksTable.css";
import { useDispatch, useSelector } from "react-redux";
import IsReadButton from "../isReadButton/IsReadButton";

function BooksTable() {
  const books = useSelector((state) => state.books.booksList);
  const dispatch = useDispatch();

  return (
    <>
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
              <tr row-id={book.id}>
                <td>{book.author}</td>
                <td>{book.title}</td>
                <td>{book.pages}</td>
                <td><IsReadButton isRead={book.isRead} id={book.id}/></td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default BooksTable;
