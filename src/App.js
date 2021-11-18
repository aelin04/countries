import { useState } from 'react';
import './App.css';
import AddTodo from './components/addTodo/addTodo';
import TodoItem from './components/todo-item/todoitem';
import Todolist from './components/todo-list/todolist';

function App() {
// Создаем хук состояния для хранения данных которые ввели в input
  const [inpData, setInpData] = useState('')
  // Cоздаем хук состояния для хранения обьектов
  const [todos, setTodos] = useState ([])

  const [status, setStatus] = useState(false)

  const addTask = () => {
   if(inpData) {
    const newObj = {
      title: inpData,
      id: Date.now(),
      status: false,
    }
    setTodos([...todos, newObj])
   } else alert('пусто')
   setInpData('')
  }
 
  function deleteTask (id) { 
    setTodos(todos.filter(task => task.id !== id))
  }

  function change () {
    setStatus(!status)
  }

  return (
    <div className="App">
     <AddTodo 
     inpData = {inpData}
     setInpData = {setInpData}
     addTask = {addTask}
     />
     <Todolist 
     status = {status}
     change = {change}
     todos = {todos}
     deleteTask ={deleteTask}
     />
    </div>
  );
}

export default App;
