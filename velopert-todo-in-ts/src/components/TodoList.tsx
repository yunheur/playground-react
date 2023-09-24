import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

interface Props {
  todos: Array<Todo>,
  onRemove: Function,
  onToggle: Function
}

const TodoList: React.FC<Props> = ({ todos, onRemove, onToggle }) => {
  return (
    <div className="TodoList">
      {todos.map(todo => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default TodoList;
