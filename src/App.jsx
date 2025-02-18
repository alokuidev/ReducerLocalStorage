import Todoprovider from "./context/Todoprovider"
import TodoApp from "./component/TodoApp";
function App() {
  
  return (
    <Todoprovider>
      <TodoApp/>
    </Todoprovider>
  )
}

export default App
