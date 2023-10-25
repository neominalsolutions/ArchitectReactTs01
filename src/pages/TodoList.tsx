import { TodoState } from "./TodoState"

type TodoProps = {
  todos:TodoState[]
}

function TodoList(props:TodoProps){
  const {todos} = props;
  return <ul>
  {
    todos.map((todo:TodoState, index:number) => {
      return <li key={todo.id}>{todo.title}</li>
    })
  }
</ul>
}

export default TodoList;