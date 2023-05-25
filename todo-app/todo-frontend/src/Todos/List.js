import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, deleteTodo, completeTodo }) => {

  return (
    <>
      {todos.map(todo => {
        return (
          <div key={todo.id} style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '70%', margin: 'auto' }}>
            <Todo todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} />
          </div>
        )
      }).reduce((acc, cur) => [...acc, <hr />, cur], [])}
    </>
  )
}

export default TodoList
