import React, { useEffect } from "react";
// ❌ REMOVED (LOCAL STATE VERSION):
// We no longer need useState here because students data
// has been moved to the global Zustand store.

import Forms from "./Components/Forms";
import List from "./Components/List";
import Login from './Components/Login'
import Registration from './Components/Registration'
import useAuthStore from './Store/AuthStore'
import { useState } from "react";

const App = () => {

  const user = useAuthStore((state) => state.user)
  const profile = useAuthStore((state) => state.profile)
  const loading = useAuthStore((state) => state.loading)
  const listenToAuth = useAuthStore((state) => state.listenToAuth)
  const logout = useAuthStore((state) => state.logout)

  const [showLogin, setShowLogin] = useState(true)

  useEffect(() => {
    listenToAuth();
  }, [listenToAuth]);

  if (loading) return <p style={{ textAlign: "center" }}>Loading......</p>


  // ❌ REMOVED (WEEK 1 – BEFORE ZUSTAND):
  // The state below used to live here:


  return (
    <div className=" p-5">
      <h1 style={{ textAlign: "center" }} className="text-2xl">Student Register</h1>
      <br />

      {!user ? (
        <>
          {showLogin ? <Login /> : <Registration />}

          <p className="text-center "><br /><br /><br /><br />{showLogin ? "No Account?" : "Already have an account?"}{" "}
            <button onClick={() => setShowLogin(!showLogin)}><br />{showLogin ? "Register" : "Login"}</button>
          </p>
        </>
      ) : (
        <>
          <p className="text-center">
            Logged in as: <strong>{profile?.name || user.email}</strong>
            {profile?.course ? `-${profile.course}` : ""}
            <br /><br />
            <button onClick={logout} style={logOutStlye} >Logout</button>
          </p>

          {/* 🔁 CHANGED:
          We are no longer passing props like setStudents or students.
          Each component now accesses the global store directly.
      */}
          <div className="flex justify-center space-x-5 pt-5" >
            <Forms style={{ marginTop: "10px" }} />
            <List />
          </div>
        </>
      )}
    </div>
  );
};

export default App;

// 🎨 STYLING ONLY (NO STATE OR LOGIC CHANGES)

const logOutStlye = {
  backgroundColor: "red",
  padding: "8px",
  borderRadius: "7px",
  color: "white",
}
