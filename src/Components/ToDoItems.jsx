import React from 'react'

const ToDoItems = (props) => {
  return (
    <div>
        {/* accepting the props */}
        <h1>{props.single.name}</h1>
        <h1>{props.single.email}</h1>

        </div>
  )
}

export default ToDoItems