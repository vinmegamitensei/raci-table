import React from "react";
import { AddNewUser, Raci, User } from "../";
import "./style.css";

export const UserRow = ({
  totalUsers,
  onAddUserClick,
  onRemoveUserClick,
  onChangeRaciOption,
}) => {
  return (
    <div className="user-row__container">
      {totalUsers.map(({ id, name, tasks }) => (
        <div key={id}>
          <User
            id={id}
            name={name}
            picture={`https://api.dicebear.com/7.x/adventurer/svg?seed=${id}&scale=180`}
            onUserClick={onRemoveUserClick}
          />
          {tasks.map((task) => (
            <Raci
              key={`${task.id}${id}`}
              userId={id}
              taskId={task.id}
              option={task.value}
              onOptionClick={onChangeRaciOption}
            />
          ))}
        </div>
      ))}
      <AddNewUser onAddNewUserClick={onAddUserClick} />
    </div>
  );
};
