import { Box, Button, Container, TextField } from '@mui/material'
import SaveIcon from "@mui/icons-material/Save";
import React, { useState } from 'react'


interface IAddTodo {
    addTodo: AddFn;
}


const AddToDo = ({addTodo}:IAddTodo) => {

    const [text, setText] = useState("")

    const handleClick = () => {
        addTodo(text)
        setText("")
    }

  return (
    <Container>
        <Box mt={5} mb={5} sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
           <TextField 
            id="outlined-basic" 
            sx={{ minWidth: {xs:"100%", sm:"50%"}, height: "50px", m:1}} 
            inputProps={{ maxLength: 40 }} 
            label="Outlined" variant="outlined" 
            value={text} 
            onChange={(e) => setText(e.target.value)}/> 
           <Button 
            variant='contained' 
            onClick={handleClick} 
            disabled={!text.trim()}
            sx={{ minWidth: { xs: "100%", sm: "15%" }, height: "55px", m: 1 }}
            endIcon={<SaveIcon />}>
                Save Todo
           </Button>
        </Box>
    </Container>
  )
}

export default AddToDo