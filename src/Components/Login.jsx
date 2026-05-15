import React, { useState } from 'react';
import useAuthStore from '../Store/AuthStore';


const Login = () => {
    const login = useAuthStore((state) => state.login);  // store action

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = async(e) => {
        e.preventDefault();

        if (!email.trim() || !password.trim()) {
            alert("Please fill the form");
            return;
        };

        try {
            await login ({email, password}); // sign in + load profile
            alert("Login successfull");
        } catch (err) {
            alert(err.message)
        }

    }
    
    
  return (
    <div className='w-130 h-60  rounded-lg p-10 ml-100'>
         <form onSubmit={handleLogin}>
            <input type="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} className='w-full p-2 rounded-lg border-1'/>
            <br/><br />
            <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} className='w-full p-2 rounded-lg border-1'/>
             <br /><br />
            <button className='bg-blue-700 p-2 rounded-lg text-white w-full '>Login</button>
        </form>
    </div>
  )
}

export default Login