import React from 'react'
import './App.css'
import WelcomeComponent from './Component/WelcomeComponent'


function App() {
  return (
    <>
     {/* <div style={{height: "400px", width: "400px", borderRadius: "50%", boxShadow: "0 0 10px gray", }}>
     <img src="https://images.pexels.com/photos/4666751/pexels-photo-4666751.jpeg" alt="" style={{height: "400px", width: "400px", boxShadow: "0 0 10px", borderRadius: "50%"}} />
     </div>
     <h1 style={{color: "blue", backgroundColor: "white"}}>This is a whale</h1>
     <p style={{color: "green"}}>Whale is the largest and the biggest creature in the sea</p> */}
     <WelcomeComponent school={"Codetrain Ghana"}/>
    </>
  )
}

export default App



