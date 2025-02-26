import React, { useContext, useRef, useState } from "react";
import ToDoContext from "../context/todoContext";

function TodoApp() {
  
  const [editingId, setEditingId] = useState(null);  
  const [fieldVal, setFieldVal] = useState('')  
  const {
    todoList,
    setTodoList,
    addTodo,
    updateTodo,
    deleteTodo,
    toggleComplete,
  } = useContext(ToDoContext);
  
  //to Capure the value of textBox
  const taskInputRef = useRef();

  //add Value to todoList
  const addTask = () =>{
    addTodo(taskInputRef.current.value);
    taskInputRef.current.value = '';
  }

  // converting text into textfiled
  const updateTodoField = (id,val) =>{
    setEditingId(id);
    setFieldVal(val);
  }
  //to Delete 
  const updateChangedTodo = (id) =>{
    updateTodo(id,fieldVal);
    setEditingId(null);
  }
  const deleteTask = (id) =>{
    deleteTodo(id);
  }
  return (
    <>
      <div className="todo-container">
        <h1>To-Do List</h1>
        <div className="todo-input">
          <input type="text" id="taskInput" placeholder="Enter a new task..." ref={taskInputRef}/>
          <button onClick={()=>addTask()}>Add Task</button>
        </div>
        <ul id="taskList">
          {todoList.map((elem) => {
            return (
              <li className="todo-item"  key={elem.id}>
                <input type="checkbox" />
                <span className="task-text">{editingId === elem.id ? <input type="text" onChange={(e) => setFieldVal(e.target.value)} value={fieldVal}/> : elem.todo}</span>
                <button className="remove-btn" onClick={() => deleteTask(elem.id)}>X</button>
                {editingId !== elem.id ?
                    <button className="edit-btn" onClick={() => updateTodoField(elem.id, elem.todo)}>E</button>
                    :
                    <button className="save-btn" onClick={() => updateChangedTodo(elem.id)}>S</button>
                }
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default TodoApp;
