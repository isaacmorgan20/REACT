import { useState } from "react";

const UpdateModal = ({ user, onUpdate, onCancel }) => {

    // 🆕 LOCAL STATE:
    // Inputs are pre-filled with current student data
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [course, setCourse] = useState(user.course);

    return (
        <div style={overlayStyle}>
            <div style={modalStyle}>
                <h2>Edit Student</h2>

                <br />
                <label>Name: </label>
                <br />
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Your name' className='outline-1 outline-gray-300 rounded p-1 w-full  ' />
                <br /><br />
                <label>Email: </label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Your email' className='outline-1 outline-gray-300 rounded p-1 w-full' />
                <br /><br />
                <label>Course: </label>
                <input type="text" value={course} onChange={(e) => setCourse(e.target.value)} placeholder='Your course' className='outline-1 outline-gray-300 rounded p-1 w-full' />
                <br /><br />

                {/* Send updated data back to parent */}
                <button style={updateBtn} onClick={() => onUpdate(user.id, name, email, course)} className="rounded" >Update</button>

                {/* Cancel closes the modal */}
                <button style={cancelBtn} onClick={onCancel} className="rounded">Cancel</button>
            </div>
        </div>
    );
};

export default UpdateModal;

const inputStyle = {
    padding: "8px",
    borderRadius: "6px",
    border: "1px solid #ccc",
};

const overlayStyle = {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(31, 4, 98, 0.79)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white"
};

const modalStyle = {
    backgroundColor: "light-green",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center",
};

const updateBtn = {
    backgroundColor: "red",
    color: "white",
    border: "none",
    padding: "6px 10px",
    marginRight: "10px",
};

const cancelBtn = {
    backgroundColor: "green",
    color: "white",
    border: "none",
    padding: "6px 10px",
};