import './App.css'
import React from 'react'
import { useState } from 'react'
import TodoForm from './component/TodoFrom.jsx'
import TodoList from './component/TodoList.jsx'



function App() { 
  const [todo, setTodo] = useState([])

  function ajouterTaches(formData) {
    const description = formData.get("description").trim(); 
    if (description) { 
      setTodo((prevTodo) => [
        ...prevTodo,
        {
          id: prevTodo.length + 1, 
          description: description,
          status: false,
        },
      ]);
    } else {
      console.error("La description de la tâche est vide."); 
    }
  }


  function changerStatus(id) {
    setTodo((prevTodo) => {
      return prevTodo.map((tache) => {
        if (tache.id === id) {
          return { ...tache, status: !tache.status };
        } else {
          return tache;
        }
      });
    });
  }

  

  function supprimerTache (id) {
    setTodo(
      todo.filter(tache => tache.id != id))
  };

  return (
    <>
    <div className="container">
      <h1>Liste de taches</h1>
      <TodoForm ajouterTaches={ajouterTaches} />
      <TodoList todo={todo} changerStatus={changerStatus} supprimerTache={supprimerTache} />
      
    </div>
    </>
  )
}

export default App
