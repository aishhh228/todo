import React from 'react'

function TodoItems() {
  return (
    <div>
       <ul className='list'>
        <li className='list-item'>
          <label className='list-item-label'>
            <input type='checkbox'/>
            Item 1
            </label>
            <button className='delete-btn'>
              Delete
            </button>
        </li>
      </ul>
    </div>
  )
}

export default TodoItems
