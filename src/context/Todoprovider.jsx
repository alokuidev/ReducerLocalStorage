import { useState } from "react";
import ToDoContext from "./todoContext";

function Todoprovider({ children }) {
  const [todoList, setTodoList] = useState([]);

  //adding value to todoList
  const addTodo = (todo) => {
    const newTodo = {
      id: Date.now(),
      todo: todo,
      completed: false,
    };
    setTodoList((prev) => [...prev, newTodo]);
  };


  const updateTodo = (id, todos) => {
    setTodoList((prev) =>
      prev.map(
        (elem) => (elem.id === id ? { ...elem, todo: todos } : elem) // Add `: elem` to return unchanged items
      )
    );
  };

  //deleted value
  const deleteTodo = (id) => {
    setTodoList((prev) => prev.filter((elem) => elem.id !== id));
  };
  const toggleComplete = (id) => {};
  
  return (
    <ToDoContext.Provider
      value={{
        todoList,
        setTodoList,
        addTodo,
        updateTodo,
        deleteTodo,
        toggleComplete,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
}

export default Todoprovider;
