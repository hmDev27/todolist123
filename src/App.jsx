// src/App.jsx
import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";

function App() {
  const [user, setUser] = useState(null);
  const [view, setView] = useState("login"); // login/signup/home

  const handleLogin = (userData) => {
    setUser(userData);
    setView("home");
  };

  return (
    <div>
      {view === "login" && (
        <>
          <Login onLogin={handleLogin} />
          <p>
            No account?{" "}
            <button onClick={() => setView("signup")}>Sign up</button>
          </p>
        </>
      )}
      {view === "signup" && (
        <>
          <Signup />
          <p>
            Have an account?{" "}
            <button onClick={() => setView("login")}>Log in</button>
          </p>
        </>
      )}
      {view === "home" && <Home />}
    </div>
  );
}

export default App;
