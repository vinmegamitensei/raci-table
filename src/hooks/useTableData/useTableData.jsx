import { useState } from "react";
import _filter from "lodash/filter";

export const useTableData = () => {
  const [userList, setUserList] = useState([]);
  const [taskList, setTaskList] = useState([]);

  const generateNewTask = (value) => ({
    id: crypto.randomUUID(),
    name: value,
    value: "R",
  });

  const generateNewUserTasks = () =>
    taskList.map((task) => ({ id: task.id, name: task.name, value: "R" }));

  const generateNewUser = (user) => ({
    id: crypto.randomUUID(),
    name: user,
    tasks: generateNewUserTasks(),
  });

  const addNewUser = (user) =>
    setUserList([...userList, generateNewUser(user)]);

  const removeUser = (id) => {
    const filteredUserList = _filter(userList, (item) => item.id !== id);
    setUserList([...filteredUserList]);
  };

  const addNewTask = (task) => {
    const newTask = generateNewTask(task);
    setTaskList([...taskList, newTask]);
    const insertNewTaskIntoUserList = userList.map((user) => ({
      ...user,
      tasks: [...user.tasks, newTask],
    }));
    setUserList(insertNewTaskIntoUserList);
  };

  const removeTask = (id) => {
    const filteredTaskList = _filter(taskList, (item) => item.id !== id);
    const filterDeletedTaskFromUserList = userList.map((user) => ({
      ...user,
      tasks: _filter(user.tasks, (task) => task.id !== id),
    }));
    setTaskList([...filteredTaskList]);
    setUserList(filterDeletedTaskFromUserList);
  };

  const handleRaciOptionChange = (userId, taskId, option) => {
    const changeRaciValueInUserList = userList.map((user) => {
      return user.id !== userId
        ? user
        : {
            ...user,
            tasks: user.tasks.map((task) =>
              task.id !== taskId ? task : { ...task, value: option }
            ),
          };
    });
    setUserList(changeRaciValueInUserList);
  };

  return [
    userList,
    taskList,
    { addNewUser, removeUser },
    { addNewTask, removeTask },
    handleRaciOptionChange,
  ];
};
