import React from 'react'
import './todo.css'
export default function TodoItem( { children, change, status }) {
    return (
        <li
        className={status ? "done" : ''} onClick = {change}>{ children }</li>
    )
}
