import React, { useState } from 'react'
import useContactStore from '../Store/ContactStore'

const ToDoForms = () => {
    // useState
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [course, setCourse] = useState("")

    const addNewUser = useContactStore((state) => state.addNewUser)

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

    const userCourse = (e) => {
        // updating the course
        setCourse(e.target.value)
    }

    // event handler for submit
    const handleSubmit = (e) => {
        // prevent the browser from loading
        e.preventDefault()

        // object
        let newUser = {
            name: name,
            email: email,
            course: course
        }
        // accepting the props
        addNewUser(newUser)
        // setting it to empty after submit
        setName("")
        setEmail("")
        setCourse("")

    }
    return (
        <div className=' p-3 w-150 border-1 border-gray-300 shadow-md rounded-md h-90'>
            <h1 className='text-2xl text-center font-bold'>Students Form</h1>
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <br />
                <input type="text" value={name} onChange={userName} placeholder='Your name' className='outline-1 outline-gray-300 rounded p-1 w-full  ' />
                <br /><br />
                <label>Email: </label>
                <input type="email" value={email} onChange={userEmail} placeholder='Your email' className='outline-1 outline-gray-300 rounded p-1 w-full' />
                <br /><br />
                <label>Course: </label>
                <input type="text" value={course} onChange={userCourse} placeholder='Your Course' className='outline-1 outline-gray-300 rounded p-1 w-full' />
                <br /><br />
                <input type="submit" className='p-2 px-7 ml-35 rounded bg-blue-600 text-white hover:bg-blue-700 ' /><br /><br />
            </form>
        </div>
    )
}

export default ToDoForms