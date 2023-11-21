import React, { useState } from "react";
import "./style.css";

export const Task = ({ id, content, onTaskClick }) => {
  const [displayTask, setDisplayTask] = useState(true);
  return (
    <button
      className="task__background"
      onClick={() => onTaskClick(id)}
      onMouseOver={() => setDisplayTask(false)}
      onMouseLeave={() => setDisplayTask(true)}
    >
      {displayTask && (
        <>
          <h1 className="task__content">{content}</h1>
        </>
      )}
      {!displayTask && (
        <>
          <div>
            <h1 className="task__content">❌</h1>
          </div>
        </>
      )}
    </button>
  );
};
