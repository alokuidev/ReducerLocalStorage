import React, { useContext, useRef } from "react";
import ToDoContext from "../context/todoContext";

function TodoApp() {
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
    addTodo(taskInputRef.current.value)
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
              <li className="todo-item" key={elem.id}>
                <input type="checkbox" />
                <span className="task-text">{elem.todo}</span>
                <button className="remove-btn">X</button>
                <button className="edit-btn" onClick={() => updateTodo(elem.id)}>E</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default TodoApp;
