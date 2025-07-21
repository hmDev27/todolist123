// src/Signup.jsx
import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://80678df4-37e9-4336-8513-a81faa7c7086-00-r7668woiy6sm.sisko.replit.dev/register", {
        email,
        password,
      });
      if (res.data.success) {
        alert("Registered! Please login.");
      } else {
        alert("User already exists");
      }
    } catch (err) {
      console.error(err);
      alert("Signup failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Signup</button>
    </form>
  );
}

export default Signup;
