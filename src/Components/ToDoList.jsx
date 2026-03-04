import React from 'react'
import useUsersStore from '../Store/UsersStore'

//THIS IS JUST TO READ OUR STATE
const StudentsList = () => {
  const users = useUsersStore((state) => state.users)
  const handleDelete = useUsersStore((state) => state.handleDelete)
  return (
    <div className='border-1 w-120 border-gray-200 shadow-md'>
      <h2 className='text-center font-bold p-2'>Student List</h2>
      <ul>
        {users.map((student) => {
          return (
            <div key={student.id} className='p-2 shadow-md my-3 border-1 border-gray-200 m-2'>
              <strong>{student.name}</strong> - {student.email}
              <br />
              <button style={{ backgroundColor: "blue", color: "white" }} className='p-1 rounded-sm' onClick={() => handleDelete(student.id)}>Delete</button>


            </div>

          )
        }


        )}
      </ul>
    </div>
  )
}

export default StudentsList