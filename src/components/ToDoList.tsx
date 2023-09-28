import Show from './Show'
import { Grid, Typography } from '@mui/material'

const ToDoList = ({todos, deleteTodo, toggleTodo}:{todos:TodoType[], deleteTodo:DeleteFn, toggleTodo: ToggleFn}) => {

    console.log(todos);

    const progressTodos = todos.filter(item => !item.isDone)
    const completedTodos = todos.filter(item => item.isDone)

  return (
    <Grid container sx={{
        d: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.5rem",
      }}>
        <Grid item xs={12}
        sm={5}
        sx={{
          border: "1px solid purple",
          borderRadius: "0.5rem",
          p: "1rem",
          minHeight: "350px",
        }}>
            <Typography variant='h4' align='center' color='error'>In Progress Todos</Typography>
            {
                progressTodos.length ? progressTodos.map(todo => <Show  key={todo.id} todo = {todo} deleteTodo = {deleteTodo} toggleTodo = {toggleTodo}/>) : <Typography variant='h6' align='center' color='error' mt={3}>No in progress Todos</Typography>
            }
        </Grid>
        <Grid item xs={12}
        sm={5}
        sx={{
          border: "1px solid green",
          borderRadius: "0.5rem",
          p: "1rem",
          minHeight: "350px",
        }}>
            <Typography variant='h4' align='center' sx={{color:'green'}}>Completed Todos</Typography>
            {
                completedTodos.length ? completedTodos.map(todo => <Show todo = {todo} key={todo.id} deleteTodo = {deleteTodo} toggleTodo = {toggleTodo}/>) : <Typography variant='h6' align='center' color='error' mt={3}>No completed Todos</Typography>
            }
        </Grid>
    </Grid>
  )
}

export default ToDoList