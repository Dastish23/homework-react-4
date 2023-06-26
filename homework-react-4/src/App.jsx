import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo } from "./action/action";
import { useState } from "react";

function App() {
  const [counter, setCouter] = useState(0);
  const [todo, setTodo] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (todo !== "") {
      dispatch(addTodo(counter, todo));
      setCouter(counter + 1);
      setTodo("");
    }
  };

  return (
    <>
      <h1>Todos</h1>
      <div className="todo">
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit}>ADD</button>

      <div className="todos">
        <ul>
          {todos?.map((todo) => (
            <li key={todo.id}>
              <p>{todo.task}</p>
              <button onClick={() => dispatch(deleteTodo(todo.id))}>
                DELETE
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
