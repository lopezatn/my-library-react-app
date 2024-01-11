import React from "react";
import "./EditBookButton.css";
import EditBookForm from "../EditBookForm/EditBookForm";

function EditBookButton({book}) {

  const toggleEditFormVisibility = () => {
    let form = document.getElementById("editBookForm");
    form.style.display = form.style.display === "block" ? "none" : "block";
  };

  console.log(book);
  return (
    <div className="edit-book">
      <button onClick={() => toggleEditFormVisibility()}>
        EDIT BOOK
      </button>
      <EditBookForm book={book}/>
    </div>
  );
}

export default EditBookButton;