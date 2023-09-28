import { Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AddToDo from '../components/AddToDo'
import ToDoList from '../components/ToDoList'
import axios from 'axios';

/* interface TodoType {
    todo:string;
    isDone: boolean;
    id: string | number;              //?bunlari global alana, yani .d.ts uzantili dosyaya cektik
} */

type UrlType = string;

const Home = () => {

    //const [todos, setTodos] = useState([] as TodoType[]);
    //const [todos, setTodos] = useState<Array<TodoType>>([]);
    const [todos, setTodos] = useState<TodoType[]>([]);             //! Bu üc secenek de oluyor, ama best practice bu


    const url = "https://64ecd95df9b2b70f2bfb08f4.mockapi.io/todos";   //?burada teype'i kendisi anliyor. Type inference

    const getTodos = async () => {
        try {
            const {data} = await axios<TodoType[]>(url)              //*Gelen veriye type tanimlamasi yaptik
            setTodos(data)
        } catch (error) {
            console.log(error);
        }
    }

    //type AddFn = (text:string) => Promise<void>;

    const addTodo: AddFn = async (text:string) => {
        try {
            await axios.post(url, {todo:text, isDone:false})
        } catch (error) {
            
        }finally{
            getTodos()
        }
    }

    const deleteTodo: DeleteFn = async (id) => {
        try {
            await axios.delete(`${url}/${id}`)
        } catch (error) {
            
        }finally{
            getTodos()
        }
    }

    const toggleTodo: ToggleFn = async (todo) => {
        try {
            await axios.put(`${url}/${todo.id}`,{...todo, isDone: !todo.isDone})
        } catch (error) {
            
        }finally{
            getTodos()
        }
    }

    useEffect(() => {
        getTodos()
    }, [])

  return (
    <Container>
        <Typography 
            color='secondary' 
            variant='h2' 
            component='h1' 
            align='center' 
            mt={3}
            >Todo App with React Typescript</Typography>
        <AddToDo addTodo = {addTodo}/>
        <ToDoList todos={todos} deleteTodo = {deleteTodo} toggleTodo = {toggleTodo}/>
    </Container>
  )
}

export default Home