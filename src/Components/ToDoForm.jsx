import React from 'react'
import { useState} from 'react'
import  useUsersStore  from '../Store/UsersStore'


const ToDoForm = () => {
  // useState
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  
  const addNewUser = useUsersStore((state) => state.addNewUser) 

  const userName = (e) => {
      // updating the name
      setName(e.target.value)
  }

  // event handler
  const userEmail = (e) => {
      // updating the email
      setEmail(e.target.value)
  }

  // event handler for submit
  const handleSubmit = (e) => {
    // prevent the browser from loading
    e.preventDefault()

    // object
    let newUser = {
      name: name,
      email: email,
    }

    addNewUser(newUser)

    // setting it to empty after submit
    setName("")
    setEmail("")
  }
  return (
    <div className='p-6 border-1 border-gray-200 h-60 shadow-lg rounded-md'>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input type="text" value={name} onChange={userName} className='outline-1 rounded p-1 w-77  ' />
        <br /><br />
        <label>Email: </label>
        <input type="email" value={email} onChange={userEmail} className='outline-1 rounded p-1 w-80 ' />
        <br /><br />
        <input type="submit" className='p-2 px-7 ml-28 rounded bg-blue-600 text-white hover:bg-blue-700 ' /><br /><br />
      </form>
    </div>
  )
}

export default ToDoForm