import { ITodo } from "../types/data";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";

interface ITodoItem extends ITodo {
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}

const TodoItem: React.FC<ITodoItem> = (props) => {
  const { id, title, complete, removeTodo, toggleTodo } = props;

  return (
    <Paper elevation={3}>
      <Card
        sx={{
          maxWidth: 400,
          height: 100,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <CardActions>
          <Checkbox checked={complete} onChange={() => toggleTodo(id)} />
        </CardActions>
        <CardContent>
          <Typography
            variant="h6"
            component="div"
            sx={{ textDecoration: complete === true ? "line-through" : "none" }}
          >
            {title}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton aria-label="delete" onClick={() => removeTodo(id)}>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Paper>
  );
};

export { TodoItem };
