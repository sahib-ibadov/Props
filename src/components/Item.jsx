import React from 'react'

function Item({todos}) {
  console.log(todos)
  return (
    <div>
       
      <table>
  <tr>
    <th>id</th>
    <th>name</th>
    <th>Surname</th>
    <th>age</th>
    <th>delete</th>

  </tr>
  <tr className='sahib'>
    <td>{todos.id}</td>
    <td>{todos.name}</td>
    <td>{todos.Surname}</td>
    <td>{todos.age}</td>
    <button>delete</button>


  </tr>
 
 
</table>
  </div>
    
  )
}

export default Item

