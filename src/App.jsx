import { useState } from "react";
import "./App.css";
import { UserRow, TaskRow, TextModal } from "./components";
import { useTableData } from "./hooks/useTableData/useTableData";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentModal, setCurrentModal] = useState("user");
  const [
    userList,
    taskList,
    userHandlers,
    taskHandlers,
    handleRaciOptionChange,
  ] = useTableData();
  const { removeUser, addNewUser } = userHandlers;
  const { removeTask, addNewTask } = taskHandlers;

  return (
    <div className="app">
      <div className="app__container">
        <div className="app__placeholder"></div>
        <TaskRow
          totalTasks={taskList}
          onRemoveTaskClick={removeTask}
          onAddTaskClick={() => {
            setModalOpen(true);
            setCurrentModal("task");
          }}
        />
      </div>
      <div className="app__container">
        <div>
          <UserRow
            totalUsers={userList}
            onRemoveUserClick={removeUser}
            onAddUserClick={() => {
              setModalOpen(true);
              setCurrentModal("user");
            }}
            onChangeRaciOption={handleRaciOptionChange}
          />
        </div>
      </div>
      <TextModal
        isOpen={isModalOpen}
        handleSubmit={(value) => {
          setModalOpen(false);
          if (currentModal === "user") {
            addNewUser(value);
          }
          if (currentModal === "task") {
            addNewTask(value);
          }
        }}
      />
    </div>
  );
}

export default App;
