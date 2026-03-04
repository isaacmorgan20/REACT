import React, { useState } from 'react'


//THIS FILE IS ONLY FOR CREATE
//NO READING , NO DELETING
const StudentsForm = ({onAddStudent}) => {
//create state for the form - initial state(""),current state(name), updating state (setName)
    const [name,setName]=useState("") //name state
    const [course,setCourse]=useState("") // course state

    //create a function to submit the form - using 'e' as 'event' parameter
    const handleSubmit =(e)=>{
        e.preventDefault()// this prevents the page from reloading after submiting the form

        //basic validation: no empty inputs
        //creates a condition to avoid people from submitting empty forms

        if (!name.trim() || !course.trim()){ //the trim moves the from (" ") ("") and gives an alert('please fill the form')
            alert('please fill the form')
            return;
        }

        //build an object that contains all form inputs
        const studentData ={
            name, //student's name from the input state
            course,//student's course from the input state
        }

        onAddStudent(studentData)

        //clear the form after submission
        setName("")
        setCourse("")

    }



  return (
    <div>
            <form onSubmit={handleSubmit}>
                <div>
                 <label>Student Name</label>
                <input 
                type="text"
                placeholder='Enter Name'
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />
                
                </div>
                <div>
                 <label>Student Course</label>
                <input 
                
                type="text"
                placeholder='Enter Course'
                value={course}
                onChange={(e)=>setCourse(e.target.value)}/>
                </div>

                <button type="submit" style={{backgroundColor: "blue"}} >Add Student</button>
            </form>

    </div>
  )
}

export default StudentsForm