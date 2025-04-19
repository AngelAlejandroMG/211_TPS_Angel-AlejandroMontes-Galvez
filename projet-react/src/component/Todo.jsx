import './Todo.css'

function Todo(props) {
    
    return (
        <li className={`todo-item ${props.done ? 'done' : ''}`}>
        <p className="todo-text">
          {props.description}
        </p>
        <div className="todo-buttons">
          <button
            className={`done-button ${props.done ? 'unDone' : ''}`}
            onClick={() => props.changerStatus(props.id)}
          >
            {props.done ? '↩' : '✔'}
          </button>
          <button
            className="delete-button"
            onClick={() => props.supprimerTache(props.id)}
          >
            ✖
          </button>
        </div> 
      </li>
    );
}

export default Todo;