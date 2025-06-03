import { ListItem, ListItemText, IconButton, Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoItem = ({ todo, index, toggleComplete, deleteTodo }) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" onClick={() => deleteTodo(index)}>
          <DeleteIcon />
        </IconButton>
      }
    >
      <Checkbox checked={todo.completed} onChange={() => toggleComplete(index)} />
      <ListItemText
        primary={todo.text}
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      />
    </ListItem>
  );
};

export default TodoItem;
