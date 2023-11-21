import React, { useState } from "react";
import "./style.css";

export const TextModal = ({ isOpen, handleSubmit }) => {
  const [textContent, setTextContent] = useState("");
  if (!isOpen) {
    return <></>;
  }

  const onSubmit = (content) => content && handleSubmit(content);

  const handlePressEnter = (event) =>
    event.code === "Enter" && onSubmit(textContent);

  return (
    <div className="modal__container">
      <input
        autoFocus
        className="modal__input"
        onChange={(event) => setTextContent(event.target.value)}
        onKeyDown={(event) => handlePressEnter(event)}
      />
      <button
        className="modal__button"
        onClick={() => {
          onSubmit(textContent);
        }}
      >
        Adicionar
      </button>
    </div>
  );
};
