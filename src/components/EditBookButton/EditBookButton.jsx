import React from "react";
import "./EditBookButton.css";

function EditBookButton(props) {
  const toggleEditFormVisibility = () => {
    let form = document.getElementById("editBookForm");
    form.style.display = form.style.display === "block" ? "none" : "block";
  };

  return (
    <div className="edit-book">
      <button onClick={() => toggleEditFormVisibility()}>
        EDIT BOOK
      </button>
    </div>
  );
}

export default EditBookButton;


// this is the button that calls the FORM