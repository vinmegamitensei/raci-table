import React, { useState } from "react";
import "./style.css";

export const TextModal = ({ isOpen, handleSubmit }) => {
  const [textContent, setTextContent] = useState("");
  if (!isOpen) {
    return <></>;
  }
  return (
    <div className="modal__container">
      <input
        className="modal__input"
        onChange={(event) => setTextContent(event.target.value)}
      />
      <button
        className="modal__button"
        onClick={() => {
          handleSubmit(textContent);
        }}
      >
        Adicionar
      </button>
    </div>
  );
};
