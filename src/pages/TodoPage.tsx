import { useState } from "react";

// apidan gelen Todo data type
type TodoState = { id?:number; title:string; completed:boolean;}
function TodoPage(){
  // listeye eklenecek olan todo ait değerleri bu state içinde tutacağız 
 const [todo,setTodo] =  useState<TodoState>({title:'todo-1',completed:true}); // current state
 // listeye yeni iş ekleme çıkarama işlemlerini todos ile yöneteceğiz
 const [todos, setTodos] = useState<TodoState[]>([]);
 // todos dizisine son state değerini ekleme işlemi gerçekleştireceğiz. 
 const addTodo = (event:Event) => { 
  event.preventDefault(); // form propegation stop ettirmek için yani form sayafı yeniden reload etmesini engellemek için kullanıldır
  todo.id = todos.length + 1;
  setTodos([todo,...todos]);
  setTodo({title:'', completed:false}) // input temizleme işlemi, current state default değerlere getirdik.
 }
 
 const OnInputChange = (event:any) => {
  console.log('OnInputChange', event.target.value);
  // react ref değerler ile çalışırken eğer spread operatör kullanmazsak virtual dom state değişimini algılamıyor bu sebele aşağıdaki formatta yazıyoruz
  // todo.title = event.target.value;
  // setTodo(todo);
  setTodo({...todo, title:event.target.value})
  // Todo State set edeceğiz.

 }
 const OnCompletedChange = (event:any) => {
  console.log('OnCompletedChange', event.target.checked);
  setTodo({...todo, completed:event.target.checked})
 }
  return <>
    Title : {todo.title}
    <br></br>
    Completed: {todo.completed ? 'Tamamlandı':'Tamamlanmadı'}
    <br></br>
    <form onSubmit={(e:any) => addTodo(e)} method="post">
      <input type="text" value={todo.title}  onChange={OnInputChange} />
      <br></br>
      <input type="checkbox" checked={todo.completed}  onChange={OnCompletedChange}  /> Tamamlandı Mı?
      <br></br>
      <input type="submit" value="Ekle" />
    </form>

    <ul>
      {
        todos.map((todo:TodoState, index:number) => {
          return <li key={todo.id}>{todo.title}</li>
        })
      }
    </ul>

  </>

}


export default TodoPage;