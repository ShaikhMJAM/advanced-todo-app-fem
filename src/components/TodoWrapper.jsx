import React, { useState, useEffect } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import TodoFooter from './TodoFooter'
import shortid from 'shortid'
import Moon from '../assets/images/icon-moon.svg'
import Sun from '../assets/images/icon-sun.svg'
import { useTheme } from '../context/theme-context'

export const TodoWrapper = () => {
  // state
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || [])

  // theme context
  const { theme, setTheme } = useTheme()

  // add todo function
  const addTodo = (todoInput) => {
    if (!todoInput.match(/\w+/gi)) {
      alert("Have some word in there!")
      return
    }
    const id = shortid.generate()
    const todo = {
      id,
      title: todoInput,
      isChecked: false,
      isDeleted: false
    }
    setTodos(prev => [todo, ...prev])
  }

  // delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  // checked todo
  const checkedTodo = (id) => {
    setTodos(todos.map(todo => {
      return todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
    }))
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <div className="todo__wrapper">

      {/* header */}
      <header className="todo__header">
        <div>
          <h1 className="todo__title">TODO</h1>
          {
            theme === "dark" ? (
              <button onClick={() => setTheme("light")}>
                <img src={Sun} alt="toggle" />
              </button>
            ) :
              (
                <button onClick={() => setTheme("dark")}>
                  <img src={Moon} alt="toggle" />
                </button>
              )
          }

        </div>
        <TodoForm addTodo={addTodo} />
      </header>

      {/* body */}
      <div className="todo__body">
        {
          todos.map(todo => (
            <Todo
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              checkedTodo={checkedTodo} />
          ))
        }
      </div>

      {/* footer */}
      {
        todos.length > 0 && <TodoFooter todos={todos} setTodos={setTodos} />
      }

    </div>
  )
}
