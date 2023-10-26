import { TodoState } from "./TodoState"
import "./TodoList.css";

type TodoProps = {
  todos:TodoState[],
  activeTodo: TodoState | undefined,
}

function TodoList(props:TodoProps){
  const {todos, activeTodo} = props;
  return <ul>
  {
    todos.map((todo:TodoState, index:number) => {
      return <li className={todo.id === activeTodo?.id ? "active":"passive"} key={todo.id}>{todo.title}</li>
    })
  }
</ul>
}

export default TodoList;