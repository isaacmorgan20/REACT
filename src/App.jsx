import React from 'react'
import Forms from './Components/Forms'
import List from './Components/List'

const App = () => {
  return (
    <section className='mt-2'>
      <h1 className='text-center font-bold text-xl'>Contact App</h1>
      <div className='flex justify-center space-x-10 mt-5'>
        <Forms />
        <List />
      </div>
    </section>
  )
}

export default App
