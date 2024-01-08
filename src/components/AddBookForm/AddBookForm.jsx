import React, { useState } from "react";
import "./AddBookForm.css";
import { useDispatch } from "react-redux";
import { addBook } from "../../features/books/bookSlice";

function AddBookForm() {
  const dispatch = useDispatch();
  const [author, setAuthor] = useState("test1");
  const [title, setTitle] = useState("");
  const [pages, setPages] = useState(0);
  const [isRead, setIsRead] = useState(false);
  const id = Math.floor(Math.random() * 900);

  const createBook = (e) => {
    e.preventDefault();

    console.log({ author, title, pages, isRead, id })
    dispatch(addBook({ author, title, pages, isRead, id }));

    e.target.reset();
  };

  return (
      <form id="addBookForm" className="add-book-form" onSubmit={createBook}>
        <div>
          <label htmlFor="author">Author:</label>
          <br />
          <input type="text" id="author" data-testid="author" onChange={(e) => setAuthor(e.target.value)} />
        </div>

        <div>
          <label htmlFor="book">Title:</label>
          <br />
          <input type="text" id="book" data-testid="title" onChange={(e) => setTitle(e.target.value)}/>
        </div>

        <div>
          <label htmlFor="pages">Pages:</label>
          <br />
          <input type="number" id="pages" data-testid="pages" onChange={(e) => setPages(parseInt(e.target.value))}/>
        </div>

        <div>
          <label htmlFor="isRead">Read?</label>
          <br />
          <input type="checkbox" id="isRead" data-testid="read" onChange={(e) => setIsRead(e.target.checked)}/>
        </div>
        <button type="submit" data-testid="add-book">Add Book</button>
      </form>
  );
}

export default AddBookForm;
