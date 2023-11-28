import { useState } from "react";
import "./App.css";
import InputFields from "./components/InputFields";

import TaskTopic from "./components/TaskTopic";
import { TaskList } from "./components/modal";
import { Typography } from "@mui/material";

function App() {
  const [taskTopic, setTaskTopic] = useState<string>("");
  const [tasks, setTasks] = useState<string>("");
  const [tasksList, setTasksList] = useState<TaskList[]>([]);
  const handleAdd = () => {
    if (tasks && taskTopic) {
      const id = Date.now();
      const taskId = Math.floor(Math.random() * 100);
      const newTask: TaskList = {
        id,
        taskTopic: taskTopic,
        task: [{ id: taskId, task: tasks }],
      };
      setTasksList((prev) => [...prev, newTask]);
      setTaskTopic("");
      setTasks("");
    }
  };
  return (
    <>
      <Typography variant="h2" sx={{ margin: "30px 0px", textAlign: "center" }}>
        Taskify
      </Typography>
      <InputFields
        tasks={tasks}
        setTasks={setTasks}
        taskTopic={taskTopic}
        setTaskTopic={setTaskTopic}
        handleAdd={handleAdd}
      />
      {tasksList && (
        <TaskTopic taskList={tasksList} setTaskList={setTasksList} />
      )}

      {/* <Button onClick={() => console.log(tasksList)}>Show</Button> */}
    </>
  );
}

export default App;
