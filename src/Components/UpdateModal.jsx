import React, { useState } from 'react'

const UpdateModal = ({ user, onUpdate, onCancel }) => {
    const [name, setName] = useState(user.name)
    const [contact, setContact] = useState(user.contact)

    const handleName = (e) => {
        setName(e.target.value)
    };

    const handleContact = (e) => {
        setContact(e.target.value)
    };
    return (
        <section className='fixed justify-center flex items-center inset-0'>
            <div className='bg-green-600 text-white w-130 h-80 justify-center  shadow-xl pt-15 rounded p-4 '>
                <h2 className='text-center text-xl font-bold'>Edit Contact</h2>
                
                    <label>Name </label>
                    <input type="text" value={name} onChange={handleName} required placeholder='Your name' className='w-full border-1 p-1 rounded border-gray-300' />
                    <br /><br />
                    <label>Contact </label>
                    <input type="tel" value={contact} onChange={handleContact} required placeholder='Your number' className='w-full border-1 p-1 rounded border-gray-300' />
                    <br /><br />

                    <div className='space-x-5 text-center'>
                        <button onClick={() => onUpdate(user.id, name, contact)} className='p-1 mt-1 bg-blue-600 hover:bg-blue-700 w-20 text-white rounded'>Update</button>
                        <button onClick={onCancel} className='p-1 mt-1 bg-yellow-600 hover:bg-yellow-700 w-20 text-white rounded'>Cancel</button>
                    </div>
                
            </div>
        </section>
    )
}

export default UpdateModal