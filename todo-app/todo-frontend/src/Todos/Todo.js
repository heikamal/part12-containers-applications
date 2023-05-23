const Todo = ({ todo, onClickDelete, onClickComplete }) => {
  const doneInfo = (
    <>
      <span>This todo is done</span>
      <span>
        <button onClick={onClickDelete(todo)}> Delete </button>
      </span>
    </>
  )

  const notDoneInfo = (
    <>
      <span>
        This todo is not done
      </span>
      <span>
        <button onClick={onClickDelete(todo)}> Delete </button>
        <button onClick={onClickComplete(todo)}> Set as done </button>
      </span>
    </>
  )

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', flexGrow: 1 }}>
      <div>
        <span>
          {todo.text} 
        </span>
      </div>
      <div style={{display: 'flex', justifyContent: 'flex-end', gap:'10px'}}>
      {todo.done ? doneInfo : notDoneInfo}
      </div>
    </div>
  )
}

export default Todo