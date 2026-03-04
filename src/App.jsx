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
    <div style={appStyle}>
      <h1 style={{ textAlign: "center" }}>Student Register</h1>

         {!user ? (
        <>
          {showLogin ? <Login /> : <Registration />}

          <p>{showLogin ? "No Account?" : "Already have an account?"}{" "}
            <button onClick={() => setShowLogin(!showLogin)}>
              {showLogin ? "Register" : "Login"}
            </button>
          </p>
        </>
      ) : (
        <>
          <p>
            Logged in as: <strong>{profile?.name || user.email}</strong>
            {profile?.course ? `-${profile.course}` : ""}
          </p>
          <button onClick={logout} style={logOutStlye}>Logout</button>

      {/* 🔁 CHANGED:
          We are no longer passing props like setStudents or students.
          Each component now accesses the global store directly.
      */}
      <Forms style={{marginTop: "10px"}}/>
      <List />
 </>
      )}
    </div>
  );
};

export default App;

// 🎨 STYLING ONLY (NO STATE OR LOGIC CHANGES)
const appStyle = {
  maxWidth: "400px",
  margin: "40px auto",
  padding: "20px",
  backgroundColor: "#f9f9f9",
  borderRadius: "10px",
};

const logOutStlye = {
  backgroundColor: "red",
  padding: "8px",
  borderRadius: "7px",
  color: "white",
}
