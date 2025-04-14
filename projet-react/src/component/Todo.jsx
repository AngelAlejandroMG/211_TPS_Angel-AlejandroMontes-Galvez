import './Todo.css'

function Todo({ tache, changerStatus, supprimerTache }) {
    
    
    return (
        <li className={`todo-item ${tache.done ? 'done' : ''}`}>
        <p className="todo-text">
          {tache.description}
        </p>
        <div className="todo-buttons">
          <button
            className={`done-button ${tache.done ? 'unDone' : ''}`}
            onClick={() => changerStatus(tache.id)}
          >
            {tache.done ? '↩' : '✔'}
          </button>
          <button
            className="delete-button"
            onClick={() => supprimerTache(tache.id)}
          >
            ✖
          </button>
        </div> 
      </li>
    );
}

export default Todo;