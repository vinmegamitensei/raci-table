import React, { useState } from "react";
import "./style.css";

export const User = ({ id, name, picture, onUserClick }) => {
  const [displayUser, setDisplayUser] = useState(true);
  return (
    <div className="user__background">
      <>
        <div
          className="user__avatar"
          onMouseOver={() => setDisplayUser(false)}
          onMouseLeave={() => setDisplayUser(true)}
          onClick={() => onUserClick(id)}
        >
          {displayUser && <img src={picture} />}
          {!displayUser && <div>❌</div>}
        </div>
        <h1 className="user__name">{name}</h1>
      </>
    </div>
  );
};
