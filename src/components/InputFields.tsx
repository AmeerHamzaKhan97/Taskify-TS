import { Container, TextField, Button, Stack } from "@mui/material";
import React from "react";

interface Props {
  tasks: string;
  setTasks: React.Dispatch<React.SetStateAction<string>>;
  taskTopic: string;
  setTaskTopic: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: () => void;
}

const InputFields = ({
  tasks,
  setTasks,
  taskTopic,
  setTaskTopic,
  handleAdd,
}: Props) => {
  return (
    <Container>
      <Stack direction="row" spacing={2}>
        <TextField
          fullWidth
          label="Task Topic"
          variant="outlined"
          value={taskTopic}
          onChange={(e) => setTaskTopic(e.target.value)}
        />
        <TextField
          fullWidth
          label="Task"
          variant="outlined"
          value={tasks}
          onChange={(e) => setTasks(e.target.value)}
        />
        <Button variant="outlined" size="large" onClick={handleAdd}>
          Add
        </Button>
      </Stack>
    </Container>
  );
};

export default InputFields;
