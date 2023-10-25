import { useState } from "react";
import { TodoState } from "./TodoState"

type TodoFormProps = {
  todoItem:TodoState // value set etme,
  onAddTodo(todo:TodoState):void;
}

function TodoForm(props:TodoFormProps){

  const {todoItem, onAddTodo} = props;

  // props ile gelen initial değer state teslim ediyoruz.
  const [todo,setTodo] =  useState<TodoState>({title: todoItem.title,completed:todoItem.completed});

  const addTodo = (event:Event) => {
    event.preventDefault();
    // form bilgisini component içinden emit et. fırlat
    // form üzerinde bulunan güncel state değerini fırlatıyor.
    onAddTodo(todo);
    setTodo({title:'',completed:false})
  }

  // component kendi içindeki durum değişikliklerini sadece state üzerinden çalıştırıyor.
  const OnInputChange = (event:any) => {
    setTodo({...todo, title:event.target.value})
  }

   const OnCompletedChange = (event:any) => {
    setTodo({...todo, completed:event.target.checked})
   }

  return <>
  <form onSubmit={(e:any) => addTodo(e)} method="post">
      <input type="text" value={todo.title}  onChange={OnInputChange} />
      <br></br>
      <input type="checkbox" checked={todo.completed}  onChange={OnCompletedChange}  /> Tamamlandı Mı?
      <br></br>
      <input type="submit" value="Ekle" />
    </form>
  </>

}

export default TodoForm;