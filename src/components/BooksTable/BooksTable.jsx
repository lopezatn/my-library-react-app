import React from "react";
import './BooksTable.css';

function BooksTable() {
  return (
    <>
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
    </>
  );
}

export default BooksTable;
