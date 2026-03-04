import React from 'react'


//THIS IS JUST TO READ OUR STATE
const StudentsList = ({ students, onDeleteStudent }) => {
  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((student) => {
          return (
            <div key={student.id}>
              <strong>{student.name}</strong> - {student.course} - {student.id}
              <button style={{ backgroundColor: "blue", color: "white" }} onClick={() => onDeleteStudent(student.id)}>Delete</button>

            </div>

          )
        }


        )}
      </ul>
    </div>
  )
}

export default StudentsList