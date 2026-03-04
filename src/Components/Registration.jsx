import React, { useState } from 'react'
import useAuthStore from '../Store/AuthStore'


const Registration = () => {
    const register = useAuthStore((state) => state.register);  // store action

    // local input states
    const [name, setName] = useState("")
    const [course, setCourse] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleRegister = async(e) => {
        e.preventDefault()

        // block empty submission
        if (!name.trim() || !course.trim() || !email.trim() || !password.trim()) {
            alert("Please fill all fields")
            return;
        }

        try {
                await register({ name, course, email, password});  // create account + profile
            alert("successfull")
        } catch (error) {
            alert(error.message)
        }
    }
  return (
    <div>
        <form onSubmit={handleRegister}>
           <input type="text"  value={name} onChange={(e) => setName(e.target.value)} placeholder='name'/>
           <input type="text"  value={course} onChange={(e) => setCourse(e.target.value)} placeholder='course'/>
           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email'/>
           <input type="password"  value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password'/>

           <button>Create Account</button>
        </form>
    </div>
  )
}

export default Registration