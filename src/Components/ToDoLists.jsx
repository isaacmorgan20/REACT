import React, { useState } from 'react'
import UpdateModal from './UpdateModal'
import useContactStore from '../Store/ContactStore'


const ToDoList = () => {
  const users = useContactStore((state) => state.users)
  const handleDelete = useContactStore((state) => state.handleDelete)
  const updateUser = useContactStore((state) => state.updateUser)

  const [userToEdit, setUserToEdit] = useState(null);

  const handleUpdate = (id, name, email, course) => {
    // 🆕 SEND UPDATED DATA TO GLOBAL STORE
    updateUser(id, { name, email, course });

    // 🔁 SAME UI BEHAVIOR AS BEFORE
    setUserToEdit(null);
  };
  return (
    <section className=' bg-green-500 text-white shadow-xl rounded p-7 w-150 text-lg'>
      <h1 className='font-bold text-2xl text-center'>Student List</h1>
      {/* mapping the user to access each item */}
      {users.map((eachUser) => {
        return <div className='bg-yellow-800 p-2 text-white mt-4 shadow-md rounded-md' key={eachUser.id} >
          <h1>{eachUser.name}</h1>
          <p>{eachUser.email}</p>
          <p>{eachUser.course}</p>
          <button className='bg-blue-600 px-5 p-1 rounded mr-3 mt-4' onClick={() => setUserToEdit(eachUser)}>Edit</button>
          <button className='bg-red-600 px-5 p-1 rounded' onClick={() => handleDelete(eachUser.id)} >Delete</button>
        </div>
      })}

      {userToEdit && (
        <UpdateModal
          user={userToEdit}
          onUpdate={handleUpdate}
          onCancel={() => setUserToEdit(null)}
        />
      )}

    </section>
  )
}

export default ToDoList