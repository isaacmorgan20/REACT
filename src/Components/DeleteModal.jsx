import React from 'react'

const DeleteModal = ({ user, onConfirm, onCancel }) => {
    return (
        <section className=' fixed justify-center flex items-center inset-0'>
            <div className='bg-red-400 w-130 h-60 pt-15 rounded p-4 text-white shadow-xl'>
                <p className='text-center'>Are you sure you want to delete{" "}
                    <strong>{user.name}</strong> </p>

                    <div className='space-x-4 text-center p-5'>
                        <button className='rounded bg-red-600 shadow hover:bg-red-700 p-2'
                            onClick={() => onConfirm(user.id)}>
                            Yes, delete
                        </button>

                        <button className='rounded bg-green-600 shadow hover:bg-green-700 p-2 '
                            onClick={onCancel}>
                            No, Cancel
                        </button>
                    </div>
                
            </div>
        </section>
    )
}

export default DeleteModal