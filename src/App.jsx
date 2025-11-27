import React, { useState } from 'react'
// import './app.css'
import ToDoForms from './Components/ToDoForms'
import ToDoList from './Components/ToDoList'
import {v4 as uuidv4} from 'uuid'


const App = () => {
  // useState
  const [user, setUser] = useState([
    {name: "Isaac Morgan", email: "isaac@email.com", id: uuidv4()},
    {name: "Kojo Annan", email: "kojo@email.com", id: uuidv4()},
  ]);
  
  // new user
 function addNewUser(newUser){
  // updating user
  setUser([...user, newUser]) 
 }
 
  return (
        <div className='flex justify-center space-x-30  w-230 h-100 mt-30 ml-60' >
        <ToDoForms addUser={addNewUser}/>
        <ToDoList user={user}/>
        </div>
         
 )
}

export default App