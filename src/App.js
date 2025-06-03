import { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  List,
  Typography,
  Paper,
} from '@mui/material';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim() === '') return;
    setTodos([...todos, { text: input, completed: false }]);
    setInput('');
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" align="center" gutterBottom>
          To-Do List
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          label="Add a new task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={addTodo}
          sx={{ mt: 2, mb: 2 }}
        >
          Add Task
        </Button>
        <List>
          {todos.map((todo, index) => (
            <TodoItem
              key={index}
              todo={todo}
              index={index}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            />
          ))}
        </List>
      </Paper>
    </Container>
  );
}

export default App;
