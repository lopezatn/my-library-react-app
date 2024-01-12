import React, { useState } from "react";
import "./NewBookButton.css";
import AddBookForm from "../AddBookForm/AddBookForm";

function NewBookButton() {
  const [toggleForm, setToggleForm] = useState(false);

  return (
    <div className="new-book-button-container">
      <button onClick={() => setToggleForm(true)}>New Book</button>
      {toggleForm && (
        <div className="overlay">
          <AddBookForm toggle={setToggleForm} />
        </div>
      )}
    </div>
  );
}

export default NewBookButton;
