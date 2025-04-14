import React from "react"
import './TodoFrom.css'

function TodoForm(props) {
       
    return (
        
        <div className="todo-input">
            <form className="todo-input" action={props.ajouterTache}>
            <input
                type="text"
                name="description"
                placeholder="Ajouter une nouvelle tâche"
            />
                <button>Ajouter</button>
            </form>
        </div>
    );
}

  export default TodoForm;