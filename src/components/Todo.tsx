import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { TodoList } from "./TodoList";

import { ITodo } from "../types/data";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

const hardTodos = [
  {
    id: "1",
    title: "Wash dishes",
    complete: false,
  },
  {
    id: "2",
    title: "Feed the cat",
    complete: false,
  },
  {
    id: "3",
    title: "Buy products",
    complete: false,
  },
  {
    id: "4",
    title: "Learn typescript",
    complete: false,
  },
];

const Todo: React.FC = () => {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState<ITodo[]>(hardTodos);
  const [snackOpen, setSnackOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      console.log(e);
      addTodo();
    }
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setTitle(e.target.value);
  };

  const addTodo = () => {
    if (title && title.length < 50) {
      setTodos([
        ...todos,
        {
          id: uuidv4(),
          title,
          complete: false,
        },
      ]);
      setTitle("");
      handleAction("Task added");
      setModalOpen(false);
    }

    if (title.length > 50) {
      handleAction("Task may contain only 50 symbols");
      return;
    }
  };

  const removeTodo = (id: string): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
    handleAction("Task deleted");
  };

  const toggleTodo = (id: string): void => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;

        return {
          ...todo,
          complete: !todo.complete,
        };
      })
    );
  };

  const handleAction = (message: string) => {
    setMessage(message);
    setSnackOpen(true);
  };

  const handleSnackClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackOpen(false);
  };

  const handleModalClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setModalOpen(false);
  };

  const snackbar = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleSnackClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  const handleClearAll = () => {
    setTodos([]);
  };

  return (
    <Container>
      <Typography variant="h3" component="h2" sx={{ mt: "15px", mb: "15px" }}>
        TO-DO List
      </Typography>
      <Box sx={{ mb: "50px" }}>
        <Button
          variant="contained"
          onClick={() => setModalOpen(true)}
          size="large"
          sx={{ mr: "15px", minWidth: "125px" }}
        >
          ADD NEW
        </Button>
        <Button
          variant="outlined"
          color="error"
          onClick={handleClearAll}
          size="large"
          disabled={todos.length === 0}
        >
          CLEAR ALL
        </Button>
      </Box>

      <Dialog
        open={modalOpen}
        onClose={handleModalClose}
        onKeyDown={handleKeyDown}
      >
        <DialogContent>
          <TextField
            autoFocus
            multiline
            maxRows={2}
            value={title}
            margin="dense"
            id="todo"
            label="What do you need to do?"
            type="text"
            onChange={handleChange}
            fullWidth
            variant="outlined"
            sx={{ width: "300px" }}
          />
        </DialogContent>
        <DialogActions sx={{ margin: "15px" }}>
          <Button onClick={handleModalClose} variant="outlined">
            Cancel
          </Button>
          <Button onClick={addTodo} variant="contained">
            Add
          </Button>
        </DialogActions>
      </Dialog>
      {todos.length === 0 ? (
        <Typography variant="h5" component="span">
          Nothing to do.
        </Typography>
      ) : (
        <TodoList
          items={todos}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        />
      )}

      <Snackbar
        open={snackOpen}
        autoHideDuration={2000}
        onClose={handleSnackClose}
        message={message}
        action={snackbar}
      />
    </Container>
  );
};

export { Todo };
