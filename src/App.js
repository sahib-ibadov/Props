import React, { useState } from 'react'
import List from './components/List'
import './style.css'
const todos=[{
  id:1,
  name:"Sahib",
  Surname:"Ibadov",
  age: 12

},{
  id:2,
  name:"Seymur",
  Surname:"Askerof",
  age: 13


},{
  id:3,
  name:"Ali",
  Surname:"Agamaliyev",
  age: 14
},{
  id:4,
  name:"Husu",
  Surname:"Maksudov",
  age: 15
},{
  id:5,
  name:"Kenan",
  Surname:"Qenberli",
  age: 16
},{
  id:6,
  name:"Tuqay",
  Surname:"Qasimov",
  age: 17
},{
  id:7,
  name:"Hikmet",
  Surname:"Bedelov",
  age: 18
}

]


function App() {
  const[table,settables]=useState(todos)
  return (
    <List table={table} settables={settables} todos={todos}/>
  )
}

export default App

