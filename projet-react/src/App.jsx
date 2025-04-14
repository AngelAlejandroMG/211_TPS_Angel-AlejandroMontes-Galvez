import './App.css'
import React from 'react'
import { useState } from 'react'
import TodoForm from './component/TodoFrom.jsx'
import TodoList from './component/TodoList.jsx'



function App() { 
  const [todo, setTodo] = useState([])

  function ajouterTaches(formData) {
    setTodo(prevTodo => [...prevTodo, {
      id: 1 + Math.random(),
      description: formData.get("description"),
      status: false
    }])

  }
  function changerStatus(id) {
    setTodo(
      todo.map( 
        tache => tache.id === id ? { ...tache, status: !tache.status } : tache
      )
    )
  }

  

  function supprimerTache (id) {
    setTodo(
      todo.filter(tache => tache.id != id))
  };

  return (
    <>
    <div className="container">
      <h1>Liste de taches</h1>
      <TodoForm ajouterTache={ajouterTaches} />
      <TodoList todo={todo} changerStatus={changerStatus} supprimerTache={supprimerTache} />
      
    </div>
    </>
  )
}

export default App
