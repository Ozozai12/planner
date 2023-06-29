import { TodoItem } from "./TodoItem";

import { ITodo } from "../types/data";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

interface ITodoListProps {
  items: ITodo[];
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}

const TodoList: React.FC<ITodoListProps> = (props) => {
  const { items, toggleTodo, removeTodo } = props;

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {items.map((todo) => (
            <Grid item xs={2} sm={4} md={4} key={todo.id}>
              <TodoItem
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
                {...todo}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export { TodoList };
