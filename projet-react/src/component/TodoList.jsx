import React from 'react';
import Todo from './Todo';
import './TodoList.css';

function TodoList(props) {
  return (
    <ul className="todo-list">
      {props.todo.map((list) => (
        <Todo
        id={list.id}
        description={list.description}
        changerStatus={props.changerStatus}
        supprimerTache={props.supprimerTache}
        done={list.status}
        />
      ))}
    </ul>
  );
}

export default TodoList;
