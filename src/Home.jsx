import React, { useEffect, useState } from "react";
import Create from "./Create";
import "./App.css";
import axios from "axios"
import { BsCircleFill, BsFillCheckCircleFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";


export default function Home() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
      const token = localStorage.getItem("token");
      axios.get('https://80678df4-37e9-4336-8513-a81faa7c7086-00-r7668woiy6sm.sisko.replit.dev/get',{
        headers: {
          Authorization: token
        }
      })
      .then(result => setTodos(result.data))
      .catch(err => console.log(err))
  },[]);

   const handleEdit = (id) => {
     axios.put('https://80678df4-37e9-4336-8513-a81faa7c7086-00-r7668woiy6sm.sisko.replit.dev/update/'+id)
      .then(result => {
        location.reload();
      })
      .catch(err => console.log(err))
   }

   const handleDelete = (id) => {
    axios.delete('https://80678df4-37e9-4336-8513-a81faa7c7086-00-r7668woiy6sm.sisko.replit.dev/delete/'+id)
      .then(result => {
        location.reload();
      })
      .catch(err => console.log(err))
   }

  return (
    <div className="home">
      <h2>Todo List</h2>
      <Create />
      {todos.length === 0 ? (
        <div>
          <h2>No Record</h2></div>) : 
          (todos.map((todo) => 
              <div className="task">
                <div className='checkbox' onClick={() => handleEdit(todo._id)}>
                  {todo.done ? <BsFillCheckCircleFill className="icon"> </BsFillCheckCircleFill>
                  :<BsCircleFill className="icon"/> 
                  }
                 <p className={todo.done ? "line_through" : ""}>{todo.task}</p>
                </div>
                <div>
                  <span><BsFillTrashFill className="icon" 
                  onClick={() => handleDelete(todo._id)}/></span>
                </div>
              </div>))}
    </div>
  );
}

