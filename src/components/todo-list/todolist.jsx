import TodoItem from "../todo-item/todoitem";
import Button from "../ui/button/button";


export default function Todolist( { todos, deleteTask }) {
    return (
        <ul>
        {todos.map(item => (
            <TodoItem key={item.id}>{item.title}
            <Button 
            deleteTask = {deleteTask}
            >DELETE</Button></TodoItem>
        ))}
        </ul>
    )
}

