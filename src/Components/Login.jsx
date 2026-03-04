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
    <div>
        <form onSubmit={handleLogin}>
            <input type="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}/>

            <button className='bg-blue-700 p-2 rounded-lg text-white'>Login</button>
        </form>
    </div>
  )
}

export default Login