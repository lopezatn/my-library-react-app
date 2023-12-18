import React from "react";
import "./BooksTable.css";

function BooksTable() {
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
        </table>
      </div>
    </>
  );
}

export default BooksTable;
