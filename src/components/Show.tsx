import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

import React from 'react'

interface ITodoListItem {
    todo: TodoType;
    deleteTodo: DeleteFn;
    toggleTodo: ToggleFn;
}

const Show: React.FC<ITodoListItem> = ({todo, deleteTodo, toggleTodo}) => {                //*Burada bunun functional bir component oldugunu belirttik
  return (
    <ListItem
          sx={{
            cursor:'pointer'
          }}
          disableGutters
          secondaryAction={
            <IconButton aria-label="comment" onClick={() => deleteTodo(todo.id)}>
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemText primary={todo.todo} onClick={() => toggleTodo(todo)}/>
        </ListItem>
  )
}

export default Show