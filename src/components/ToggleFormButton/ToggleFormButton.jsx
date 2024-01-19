import React, { useState } from "react";
import "./ToggleFormButton.css";

function ToggleFormButton({buttonText, FormComponent, book }) {
  const [toggleForm, setToggleForm] = useState(false);

  return (
    <div>
      <button onClick={() => setToggleForm(true)}>{buttonText}</button>
      {toggleForm && (
        <div className="overlay">
          {FormComponent && <FormComponent book={book} toggle={setToggleForm} /> }
        </div>
      )}
    </div>
  );
}

export default ToggleFormButton;