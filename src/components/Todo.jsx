import React from 'react'
import checkIcon from "../assets/images/icon-check.svg"
import crossIcon from "../assets/images/icon-cross.svg"

const Todo = ({ todo, deleteTodo, checkedTodo }) => {
  return (
    <div className="todo">
      <input type="checkbox"
        id={`check${todo.id}`}
        className="checkbox"
        defaultChecked={todo.isChecked}
        aria-label={todo.title}
        onChange={() => checkedTodo(todo.id)}
      />
      <div className="custom__checkbox">
        <img src={checkIcon} alt="check" />
      </div>
      <label htmlFor={`check${todo.id}`}>{todo.title}</label>
      <button className="delete__btn" onClick={() => deleteTodo(todo.id)}>
        <img src={crossIcon} alt="delete" />
      </button>
    </div>
  )
}

export default Todo