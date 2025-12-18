import React, { useEffect, useState } from 'react'

const ChildComponent = () => {
    // create a state for our life cycle
    const [count, setCount] = useState(0)
    
    //............... (1)...........creating a life-cylcle using useEffect()
    useEffect(() => {
        console.log("component mounted");

        return() => {
            console.log("component unmounted")
        }
    },[])

    //........(2)........changing the component or updating...
    useEffect(() => {
        console.log("component updated");  
    },[count])
    return (
        <div>
            <h1>{count}</h1>
            <button style={{backgroundColor: "blue", color: "white"}} onClick={() => {setCount(count + 1)}}>click to count</button>
        </div>
    )
}

export default ChildComponent