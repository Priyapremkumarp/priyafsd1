import { Button, TextField,  } from '@mui/material'
import React, { useState } from 'react'

const Todo=()=> {
    var[names,setNames]=useState()
    var[data,setData]=useState([])
    const inputHandler=(e)=>{
        setNames(e.target.value)

    }
    const addHandler=()=>{
        setData((data=>[...data,names]))
        setNames('')

    }

  
    

  return (
    <div style={{padding:"80px"}}>
    
    <TextField  varient="outlined" placeholder="EnterText" onChange={inputHandler} value={names}></TextField><br></br>
    <Button varient='contained' color='secondary' onClick={addHandler}>submit</Button>
    <ol>
            

            {data.map((value,index)=>{
                return(
               <li key={index}>{value}</li>
                )
            })
            }
        

        </ol>
    
    
</div>
  )
}

export default Todo