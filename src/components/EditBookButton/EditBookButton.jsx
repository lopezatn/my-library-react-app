import React, { useState } from "react";
import "./EditBookButton.css";
import EditBookForm from "../EditBookForm/EditBookForm";

function EditBookButton({ book }) {
  const [toggleForm, setToggleForm] = useState(false);

  return (
    <div>
      <button onClick={() => setToggleForm(true)}>EDIT</button>
      {toggleForm && (
        <div className="overlay">
          <EditBookForm book={book} toggle={setToggleForm} />
        </div>
      )}
    </div>
  );
}

export default EditBookButton;
