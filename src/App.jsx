import React from 'react'
import ToDoForms from './Components/ToDoForm'
import ToDoList from './Components/ToDoList'

const App = () => {



  return (
    <section>
      <h1 className='text-center text-xl mt-10 font-bold'>User Forms</h1>
      <div className='flex justify-center space-x-30 mt-10 ml-60' >
        <ToDoForms />
        <ToDoList />
      </div>
    </section>
  )
}

export default App