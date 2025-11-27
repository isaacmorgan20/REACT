import React from 'react'
import ToDoItems from './ToDoItems'

const ToDoList = (props) => {
  return (
    <section className=' bg-green-500 text-white shadow-xl rounded p-7 w-150 text-lg'>
        <h1 className='font-bold text-xl text-center'>Forms</h1>
        {/* mapping the user to access each item */}
    {props.user.map((eachUser) => {
        return (<ToDoItems single={eachUser}/> )
            
    })}
        
    </section>
  )
}

export default ToDoList