import React, { useState } from "react";
import "./style.css";

export const Raci = ({ option, onOptionClick, userId, taskId }) => {
  const [displayOptions, setDisplayOptions] = useState(true);

  const checkForSelectedOption = (option, selected) =>
    option === selected ? "raci__option--selected" : "";

  return (
    <div
      className="raci__background"
      onMouseOver={() => setDisplayOptions(false)}
      onMouseLeave={() => setDisplayOptions(true)}
    >
      {displayOptions && (
        <>
          <h1 className="raci__option">{option}</h1>
        </>
      )}
      {!displayOptions && (
        <>
          <div className="raci__option--picker">
            <button
              className={`${checkForSelectedOption(
                "R",
                option
              )} raci__option--button`}
              onClick={() => onOptionClick(userId, taskId, "R")}
            >
              R
            </button>
            <button
              className={`${checkForSelectedOption(
                "A",
                option
              )} raci__option--button`}
              onClick={() => onOptionClick(userId, taskId, "A")}
            >
              A
            </button>
            <button
              className={`${checkForSelectedOption(
                "C",
                option
              )} raci__option--button`}
              onClick={() => onOptionClick(userId, taskId, "C")}
            >
              C
            </button>
            <button
              className={`${checkForSelectedOption(
                "I",
                option
              )} raci__option--button`}
              onClick={() => onOptionClick(userId, taskId, "I")}
            >
              I
            </button>
          </div>
        </>
      )}
    </div>
  );
};
