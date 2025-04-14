import './App.css'
import React from 'react'
import { useState } from 'react'
import TodoForm from './component/TodoForm'
import TodoList from './component/TodoList'



function App() { 
  const [todo, setTodo] = useState([])

  const ajouterTache = texte=> {
    const nouvelleTache = {
      id: Date.now(),
      description: texte,
      terminee: false
    }
    setTodo([...todo, nouvelleTache])
  };

  const changerStatus = id => {
    setTodo(
      todo.map(
        tache => tache.id == id ? {...tache, termine: !tache.termine} : tache //me permettre de faire un operateur terneraire en d/composant grace au id les tache
      )
    )
  };

  const supprimerTache = id => {
    setTodo(
      todo.filter(tache => tache.id != id))
  };

  return (
    <>
    <div className="container">
      <h1>Liste de taches</h1>
      <TodoForm ajouterTache={ajouterTache} />
      <TodoList todo={todo} changerStatus={changerStatus} supprimerTache={supprimerTache} />
    </div>
    </>
  )
}

export default App
