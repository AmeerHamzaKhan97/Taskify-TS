import React from "react";
import { Container, Typography } from "@mui/material";
import TaskCards from "./TaskCards";
import { TaskList } from "./modal";

interface Props {
  taskList: TaskList[];
  setTaskList: React.Dispatch<React.SetStateAction<TaskList[]>>;
}

function TaskTopic({ taskList, setTaskList }: Props) {
  return (
    <Container>
      <Typography variant="h4" sx={{ margin: "15px 0px" }}>
        Task With Topics
      </Typography>
      <TaskCards taskList={taskList} setTaskList={setTaskList} />
    </Container>
  );
}

export default TaskTopic;
