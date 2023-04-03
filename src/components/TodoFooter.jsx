import React from 'react'

const TodoFooter = ({ todos, setTodos }) => {
  const filterCheckedTodo = todos.filter(todo => !todo.isChecked)
  const count = filterCheckedTodo.length
  return (
    <footer className="todo__footer">
      <div className="todo__left">
        {
          count > 1 ? `${count} items left` : `${count} item left`
        }
      </div>
      <div className="todo__filter">
        <button className="filter__btn btn__primary">All</button>
        <button className="filter__btn">Active</button>
        <button className="filter__btn">Completed</button>
      </div>
      <div className="clear">
        <button className="filter__btn" onClick={() => setTodos(filterCheckedTodo)}>Clear Completed</button>
      </div>
    </footer>
  )
}

export default TodoFooter