import React from 'react';
import Todo from './Todo';
import './TodoList.css';

function TodoList({ todo, changerStatus, supprimerTodo }) {
  return (
    <ul className="todo-list">
      {todo.map((list) => (
        <Todo
        key={list.id}
        todo={list}
        changerStatus={changerStatus}
        supprimerTodo={supprimerTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
