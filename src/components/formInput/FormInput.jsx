import React from "react";
import "./FormInput.scss";

function FormInput({ type, placeholder, inputName }) {
  return (
    <>
      {type !== "textarea" ? (
        <input
          type={type}
          placeholder={placeholder}
          className="FormInput px-3 fst-italic text-secondary small"
          name={inputName}
        />
      ) : (
        <textarea name={inputName} className="FormInput px-3 py-2 fst-italic text-secondary small" id="" cols="30" rows="30" placeholder={placeholder} style={{height: '130px'}}></textarea>
      )}
    </>
  );
}

export default FormInput;
