import React from "react";
import './NewBookButton.css';

function NewBookButton() {
  const toggleFormVisibility = () => {
    let form = document.getElementById("addBookForm");
    form.style.display = form.style.display === "block" ? "none" : "block";
  };

  return (
    <>
      <div className="new-book">
        <button id="toggleButton" onClick={() => toggleFormVisibility()}>
          New Book
        </button>
      </div>
    </>
  );
}

export default NewBookButton;
