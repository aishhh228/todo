import React from 'react'

function NewTodoForm() {
  return (
    <div>
      <form className='new-todo-form'>
      <div className='content'>
        <label className='title' htmlFor='item'>New Item</label>
        <input className='input-text' type='text' id='item'></input>
      
      </div>
      <button className='add-btn'>Add</button>
       </form>
    </div>
  )
}

export default NewTodoForm
