import { useState } from "react";
import ToDoContext from "./todoContext";

function Todoprovider({ children }) {
  const [todoList, setTodoList] = useState([]);
  
  //adding value to todoList
  const addTodo = (todo) => {
    const newTodo = {
        id:Date.now(),
        todo:todo,
        completed:false
    } 
    setTodoList((prev)=>[...prev,newTodo])
   };
  const updateTodo = (id, todos) => { 
        alert(id,todos)
  };
  
  //deleted value
  const deleteTodo = (id) => {
    setTodoList((prev) => prev.filter((elem) => elem.id !== id ));
  };
  const toggleComplete = (id) => {alert(id)};
  return (
    <ToDoContext.Provider value={{ todoList, setTodoList, addTodo,updateTodo, deleteTodo,toggleComplete }}>
      {children}
    </ToDoContext.Provider>
  );
}

export default Todoprovider;
