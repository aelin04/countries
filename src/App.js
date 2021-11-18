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
 
  const deleteTask = (index) => {
    
  }
  console.log(todos);
  return (
    <div className="App">
     <AddTodo 
     inpData = {inpData}
     setInpData = {setInpData}
     addTask = {addTask}
     />
     <Todolist 
     todos = {todos}
     deleteTask ={deleteTask}
     />
    </div>
  );
}

export default App;
