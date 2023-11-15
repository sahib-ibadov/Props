import React from 'react'
import Item from './Item'

function List({todos}) {
  console.log(todos)
  return (
    <div>
      {
        todos && todos.map(((todos,id)=>(<Item todos={todos} key={id} />)))
      }
    </div>
  )
}

export default List
