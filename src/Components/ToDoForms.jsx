import React, { useState } from 'react'

const ToDoForms = (props) => {
    // useState
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
  
    // event handler
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
        // accepting the props
        props.addUser(newUser)
        // setting it to empty after submit
        setName("")
        setEmail("")
       
    }
  return (
    <div className=' p-3  w-150 '>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input type="text"  value={name} onChange={userName} className='outline-1 rounded p-1 w-77  '/>
        <br /><br />
        <label>Email: </label>
        <input type="email"  value={email} onChange={userEmail} className='outline-1 rounded p-1 w-80 '/>
        <br /><br />
        <input type="submit" className='p-2 px-7 ml-35 rounded bg-blue-600 text-white hover:bg-blue-700 ' /><br /><br />
      </form>
    </div>
  )
}

export default ToDoForms