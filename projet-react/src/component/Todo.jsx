import './Todo.css'

function Todo(props) {
  function changerStat() {
    props.changerStatus(props.id)
    console.log(props.id)
  }
  
  function supprimerTaches() {
    props.supprimerTache(props.id)
  }

  
    
    
    return (
        <li key={props.id} className={`todo-item ${props.done ? 'done' : ''}`}>
        <p className="todo-text">
          {props.description}
        </p>
        <div className="todo-buttons">
          <button
            className={`done-button ${props.done ? 'unDone' : ''}`}
            onClick={changerStat}
          >
            {props.done ? '↩' : '✔'}
          </button>
          <button
            className="delete-button"
            onClick={supprimerTaches}
          >
            ✖
          </button>
        </div> 
      </li>
    );
}

export default Todo;