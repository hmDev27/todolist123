//IMPORT
import React from "react";
import "./App.css";
import {useState} from "react";
import axios from 'axios'

export default function Create() {
  const [task, setTask] = useState(); //COMPONENT STATE
  const handleAdd = () => {
        // ✅ Live backend hosted on Cyclic
axios.post('https://todo-api-xyz.cyclic.app/add', { task: task })

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


