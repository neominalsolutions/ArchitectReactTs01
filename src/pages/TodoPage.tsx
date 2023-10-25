import { useState } from "react";
import { TodoState } from "./TodoState";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

function TodoPage(){
  // listeye eklenecek olan todo ait değerleri bu state içinde tutacağız 
 // listeye yeni iş ekleme çıkarama işlemlerini todos ile yöneteceğiz
 const [todos, setTodos] = useState<TodoState[]>([]);
 // todos dizisine son state değerini ekleme işlemi gerçekleştireceğiz. 
 const addTodo = (todo:TodoState) => { 
  todo.id = todos.length + 1;
  setTodos([todo,...todos]);
 }
 
  return <>
{/* child Component */}
{/* formdaki state bilgisini fılatıp. root componentte güncel state bilgisine göre listeye ekleme yapıyor */}
    <TodoForm todoItem={{title:'',completed:false}} 
    onAddTodo={(todoItem:TodoState) => addTodo(todoItem)} />

{/* child Component */}
{/* güncel state ile componenti güncelliyor */}
    <TodoList todos={todos} />
  </>
}


export default TodoPage;