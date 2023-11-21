import React, { useState } from "react";
import "./style.css";

export const AddNewTask = ({ onAddNewTaskClick }) => {
  return (
    <button className="new-task__background" onClick={onAddNewTaskClick}>
      <h1 className="new-task__content">+</h1>
    </button>
  );
};
