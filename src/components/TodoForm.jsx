import React, { useState } from 'react'
import { ImArrowRight2 } from "react-icons/im"

const TodoForm = ({ addTodo }) => {
  // state
  const [todoInput, setTodoInput] = useState("")

  // submit function
  const handleSubmit = e => {
    e.preventDefault()
    addTodo(todoInput)

    setTodoInput("")
  }

  const handleChange = e => {
    let val = e.target.value;
    setTodoInput(val)
  }

  return (
    <form className="add__form" onSubmit={handleSubmit}>
      <input type="text"
        placeholder="Create a new todo..."
        value={todoInput}
        required
        autoFocus
        className="todo__input"
        onChange={handleChange}
      />
      <button className="add__btn" aria-label="add-todo"><ImArrowRight2 /></button>
    </form>
  )
}

export default TodoForm