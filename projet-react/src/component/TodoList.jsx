import React from 'react';
import Todo from './Todo';
import './TodoList.css';

function TodoList(props) {
  return (
    <ul className="todo-list">
      {props.todo.map((tache) => (
        <Todo
        id={tache.id}
        key={tache.id}
        description={tache.description}
        changerStatus={props.changerStatus}
        supprimerTache={props.supprimerTache}
        done={tache.status}
        />
      ))}
    </ul>
  );
}

export default TodoList;
