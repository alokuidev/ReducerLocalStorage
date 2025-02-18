import { useState } from 'react'
import ToDoContext from './todoContext'

function Todoprovider({children}) {
  const [todo,setTodo] = useState([]);  
  return (
    <ToDoContext.Provider value={{todo,setTodo}}>
        {children}
    </ToDoContext.Provider>
  )
}

export default Todoprovider
