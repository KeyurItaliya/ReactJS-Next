import React, { useState, useEffect } from 'react'
import { Page } from './home'
function cleaningPage() {
  const [addTodoApp, setAddTodoApp] = useState([])
  const [toDo, setToDo] = useState("")
  useEffect(() => {
    return () => {
      localStorage.removeItem("cleaningState")
    }
  }, [])
  // useEffect(() => {
  //   localStorage.setItem("cleaningState", addTodoApp)
  // }, [])

  const addLocalStore = () => {
    setAddTodoApp(() => [...addTodoApp, toDo])
    // let allStateStore = addTodoApp.concat(toDo)
    console.log("add Todo App", addTodoApp)
    localStorage.setItem("cleaningState", JSON.stringify(addTodoApp))
  }

  return (
    <div>
      <Page />
      <input type="text" value={toDo} onChange={(e) => {setToDo(e.target.value)}}/>
      <button onClick={addLocalStore}>Add Localstate</button>
    </div>
  )
}

export default cleaningPage
