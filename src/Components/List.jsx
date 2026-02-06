import React, { useEffect, useState } from 'react'
import useContactStore from '../Store/contactStore'
import DeleteModal from './DeleteModal'
import UpdateModal from './UpdateModal'

const List = () => {
    const users = useContactStore((state) => state.users)
    const deleteUser = useContactStore((state) => state.deleteUser)
    const updateUser = useContactStore((state) => state.updateUser)
    const fetchUser = useContactStore((state) => state.fetchUser)

    const [userToDelete, setUserToDelete] = useState(null)
    const [userToEdit, setUserToEdit] = useState(null)

    useEffect(() => {
        fetchUser()
    }, [fetchUser])


    const handleConfirmDelete = (id) => {
        deleteUser(id)

        setUserToDelete(null)
    }
 
    const handleUpdate = (id, name, contact) => {
        updateUser(id, { name, contact })
        setUserToEdit(null)
    }

    return (
        <section className='border-1 rounded w-100 p-4 border-gray-300 shadow'>
            <h1 className='text-center text-xl underline font-bold'>Contact List</h1>

            {users.map((user) => {
                return (<div key={user.id} className='border-1 p-2 mt-2 rounded shadow border-gray-200'>
                    <h2>Name: <strong>{user.name}</strong></h2>
                    <h2>Contact: {user.contact}</h2>

                    <div className='space-x-5'>
                        <button onClick={() => setUserToDelete(user)} className='p-1 mt-1 bg-red-600 hover:bg-red-700 w-20 text-white rounded'>Delete</button>
                        <button onClick={() => setUserToEdit(user)} className='p-1 mt-1 bg-blue-600 hover:bg-blue-700 w-20 text-white rounded'>Edit</button>
                    </div>
                </div>)
            })}

            {userToDelete && (
                <DeleteModal
                    user={userToDelete}
                    onConfirm={handleConfirmDelete}
                    onCancel={() => setUserToDelete(null)}
                />)}

                {userToEdit && (
                    <UpdateModal 
                    user={userToEdit}
                    onUpdate={handleUpdate}
                    onCancel={() => setUserToEdit(null)}/>
                )}


        </section>
    )
}

export default List