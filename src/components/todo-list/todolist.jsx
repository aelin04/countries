import TodoItem from "../todo-item/todoitem";
import Button from "../ui/button/button";


export default function Todolist( { todos, deleteTask, change, status}) {
    return (
        <ul>
        {todos.map(item => (
            <TodoItem key={item.id}
            status={status}
            change = {change}>{item.title} 
            
            <Button 
            deleteTask = {(e)=> deleteTask(item.id)}
            >DELETE</Button></TodoItem>
        ))}
        </ul>
    )
}

