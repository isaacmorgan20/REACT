import React from 'react'
import Button from './Button'


const Navbar = () => {
  return (
    <div>
        <h1 className='bg-green-500 text-red-600'>This is my navbar page of my reaact app</h1>
        <p className='text-xl text-blue-700'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam quasi quis mollitia labore odio perferendis, libero sequi at aperiam assumenda maxime eligendi tenetur ipsa maiores hic enim deserunt quidem itaque?</p>
        <Button className={"click"} title="submit" color="green" bg="yellow" />
        <Button title="update" color="blue" bg="red"/>
    </div>
  )
}

export default Navbar