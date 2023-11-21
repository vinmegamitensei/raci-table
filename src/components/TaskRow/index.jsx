import React from "react";
import { AddNewTask, Task } from "../";
import "./style.css";

export const TaskRow = ({ totalTasks, onAddTaskClick, onRemoveTaskClick }) => {
  return (
    <div className="task-row__container">
      {totalTasks.map(({ id, name }) => (
        <Task key={id} id={id} content={name} onTaskClick={onRemoveTaskClick} />
      ))}
      <AddNewTask onAddNewTaskClick={onAddTaskClick} />
    </div>
  );
};
