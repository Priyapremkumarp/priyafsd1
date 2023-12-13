import {  CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,  } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const  Viewdata=()=> {
  var[users,setUsers]=useState([])
  var[loading,setLoading]= useState(false)
  
  useEffect(()=>{
    setLoading(true)
    // axios.get("https://jsonplaceholder.typicode.com/users")
    axios.get("https://api.github.com/users")
  .then((res)=>{
    console.log(res.data)
    setUsers(res.data)
    setLoading(false)
  })
  .catch((err=>console.log(err)))
    
  },[])
  //axios.get("https://jsonplaceholder.typicode.com/posts")
  
  return (
    <div>
      {loading?< CircularProgress color='primary'/> :<TableContainer>
            <Table>
                <TableHead>
                  <TableRow>
                  
                  <TableCell style={{color:'red'}}>ID</TableCell>
                        <TableCell style={{color:'red'}}>NAME</TableCell>
                        <TableCell style={{color:'red'}}>EMAIL</TableCell>
                        </TableRow>
                </TableHead>

                        <TableBody>
                          {users.map((val,i)=>{
                            return(
                              <TableRow>
                                <TableCell>{val.login}</TableCell>
                                <TableCell>{val.id}</TableCell>
                                {/* <TableCell>{val.email}</TableCell> */}
                                <TableCell><img height={"100px"} src={val.avatar_url}  /></TableCell>
                              </TableRow>
                            )
                          }
                          )}
                          </TableBody>
                  
                  
            </Table>
        </TableContainer>}
      
        
        
    </div>
  )
}

export default Viewdata