function App() {

  return (
    <>
      <div className="todo-container">
        <h1>To-Do List</h1>
        <div className="todo-input">
            <input type="text" id="taskInput" placeholder="Enter a new task..."/>
            <button>Add Task</button>
        </div>
        <ul id="taskList">
            <li className="todo-item">
                <input type="checkbox"/>
                <span className="task-text">Learn Redux</span>
                <button className="remove-btn">X</button>
                <button className="edit-btn">E</button>
            </li>
            <li className="todo-item">
                <input type="checkbox"/>
                <span className="task-text">Complete React Project</span>
                <button className="remove-btn">X</button>
                <button className="edit-btn">E</button>
            </li>
        </ul>
    </div>
    </>
  )
}

export default App
