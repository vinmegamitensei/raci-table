import React, { useState } from "react";
import "./style.css";

export const TextModal = ({ isOpen, handleModal, handleSubmit }) => {
  const [textContent, setTextContent] = useState("");
  if (!isOpen) {
    return <></>;
  }

  const onSubmit = (content) => {
    if (content) {
      setTextContent("");
      handleSubmit(content);
    }
  };

  const handleKeyPress = (event) => {
    if (event.code === "Enter") {
      onSubmit(textContent);
    }
    if (event.code === "Escape") {
      handleModal(false);
    }
  };

  return (
    <div className="modal__container">
      <input
        autoFocus
        className="modal__input"
        onChange={(event) => setTextContent(event.target.value)}
        onKeyDown={(event) => handleKeyPress(event)}
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
