//IMPORT
import React from "react";
import "./App.css";
import {useState} from "react";
import axios from 'axios'

export default function Create() {
  const [task, setTask] = useState(); //COMPONENT STATE
  const handleAdd = () => {
        // ✅ Live backend hosted on Cyclic
axios.post('https://80678df4-37e9-4336-8513-a81faa7c7086-00-r7668woiy6sm.sisko.replit.dev/add', { task: task })

        .then(result => {
          location.reload()
        })
        .catch(err => console.log(err))
  }
  return (
    <div className="create_form">
      <input type="text" placeholder="Enter Task" onChange={(e) => setTask(e.target.value)}/>
      <button type="button" onClick={handleAdd}>Add</button>
    </div>
  );
}


