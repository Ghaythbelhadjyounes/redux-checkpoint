import "./App.css";
import Add from "./Components/Add";
import TodoList from "./Components/TodoList";

function App() {
  return (
    <div className="App">
      <h1>To do List</h1>
      <Add/>
      <TodoList/>
    </div>
  );
}

export default App;
