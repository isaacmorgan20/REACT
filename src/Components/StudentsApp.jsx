import React, { useState } from 'react'
import StudentsForm from './StudentsForm'
import StudentsList from './StudentsList'


const StudentsApp = () => {
    //...............(1) READ .................
     //create our state that holds student info
    //STATE : THE MAIN DATA - LIST OUR STUDENTS
    const [student,  setStudent]= useState([
        {id: 1, name: "Manuel", course: "Computer Science"},
        {id:2, name:"Mandy", course:"REACT"}]
      )
//THIS IS THE ONLY SOURCE OF TRUTH

//...................(2) CREATE ..................
//ITS A FUNCTION TO ADD OR CREATE NEW STUDENTS
const handleAddStudents = (studentData)=>{ //studentData should look like {name: "Yaw", course: "Node js"}

//Build a full student object with an id
const newStudent ={
    id: Date.now(),//simple id
    ...studentData,//we spread whatever information we will pass to the studentData 
}
//new student becomes=>>>>>>> {id: 754333562, name: "isaac", course: "backend"}
//update state immutably (create a new array) - and add a new student to it
setStudent((previousStudents)=>[...previousStudents, newStudent])

}

//Deleting a user
const handleDelete = (idDelete) => {
setStudent((previousStudents) => previousStudents.filter((person) => person.id !== idDelete))}



  return (
    <div style={{display: "", textAlign: "center" }}>
        <StudentsForm onAddStudent={handleAddStudents}/>
        <StudentsList students={student} onDeleteStudent={handleDelete}/>
    </div>
  )
}

export default StudentsApp