import React, { use } from "react";
import { useState } from "react";
import "./TodoForm.css"; 

function TodoForm({ ajouterTache }) {
    const [tache, setTache] = useState("");


    function handleSubmit(event) {
        event.preventDefault();
        if (tache.trim()) {
            ajouterTache(tache);
            setTache("");
        }
    }
    return (
        
        <div className="todo-input">
            <form className="todo-input" onSubmit={handleSubmit}>
            <input
                type="text"
                value={tache}
                onChange= {oc => setTache(oc.target.value)} // chercher sur internet pour simplifier le code
                placeholder="Ajouter une nouvelle tâche"
            />
            </form>
            <button type="submit">Ajouter</button>
        </div>
    );
}

  export default TodoForm;