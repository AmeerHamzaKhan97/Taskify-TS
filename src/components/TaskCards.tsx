import React, { useState } from "react";
import {
  Card,
  Typography,
  Grid,
  CardContent,
  Stack,
  TextField,
} from "@mui/material";
import { TaskList } from "./modal";
import AddIcon from "@mui/icons-material/Add";
import DoneIcon from "@mui/icons-material/Done";

interface Props {
  taskList: TaskList[];
  setTaskList: React.Dispatch<React.SetStateAction<TaskList[]>>;
}

function TaskCards({ taskList, setTaskList }: Props) {
  const backgroundColors = ["#ffeec2", "#69d7d7", "#ffdada", "#ffd4a9"];
  const [isAdd, setIsAdd] = useState<boolean>(false);
  const [newTask, setnewTask] = useState<string>("");
  const [selectedCardId, setSelectedCardId] = useState<number>();

  const handleNewTask = (id: number) => {
    if (newTask.length !== 0) {
      const newId = Math.floor(Math.random() * 100);

      setTaskList((prevTaskList) =>
        prevTaskList.map((task) =>
          task.id === id
            ? {
                ...task,
                task: [
                  ...task.task,
                  {
                    id: newId,
                    task: newTask, // You can replace this with the actual new task content
                  },
                ],
              }
            : task
        )
      );
      setnewTask("");
    }

    setIsAdd(false);
  };
  return (
    <Grid container>
      {taskList.map((values, index) => (
        <Grid item lg={3.3}>
          <Card
            key={values.id}
            elevation={2}
            sx={{
              width: "290px",
              height: "300px",
              borderRadius: "10px",
              backgroundColor:
                backgroundColors[index % backgroundColors.length],
            }}
          >
            <CardContent>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  {values.taskTopic}
                </Typography>
                {!isAdd && (
                  <AddIcon
                    onClick={() => {
                      setIsAdd(true);
                      setSelectedCardId(values.id);
                    }}
                  />
                )}
                {isAdd && selectedCardId === values.id && (
                  <DoneIcon onClick={() => handleNewTask(values.id)} />
                )}
              </Stack>
              {isAdd && selectedCardId === values.id && (
                <TextField
                  variant="outlined"
                  sx={{ backgroundColor: "#fff", marginTop: "10px" }}
                  onChange={(e) => setnewTask(e.target.value)}
                />
              )}
              <ul>
                {values.task.map((data) => (
                  <li style={{ fontSize: "28px", margin: "8px 0px" }}>
                    {data.task}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default TaskCards;
