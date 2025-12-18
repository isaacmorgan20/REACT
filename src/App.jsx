import React, { useState } from 'react'
import ChildComponent from './ChildComponent'
import ApiComponent from './ApiComponent'

const App = () => {
  //create a state to help unmount the component
  const [show, setShow] = useState(true)

  //create a function to unmount the component
  const handleShow = () => {
   setShow(!show)
  }
  return (
    <div>
      <button style={{backgroundColor: "yellow", color: "white"}} onClick={handleShow}>Unmount Component</button>  
      {show && <ChildComponent />}
      {show && <ApiComponent />}
    </div>
  )
}

export default App