import React from "react";
import "./style.css";

export const AddNewUser = ({ onAddNewUserClick }) => {
  return (
    <button className="add-user__background" onClick={onAddNewUserClick}>
      <h1 className="add-user__label">+</h1>
    </button>
  );
};
