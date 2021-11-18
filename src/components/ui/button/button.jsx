

export default function Button({ children, onClick, deleteTask  }) {
    return (
        <button

        onClick = {onClick || deleteTask}
        >{ children }</button>
    )
}
