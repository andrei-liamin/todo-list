import React from 'react';

function TodoItem(props) {
  return <li>
  	<input
  		type="checkbox"
  		checked={props.isCompleted}
  		onChange={(e) => props.onToggleTodo(props.index, e.target.checked)}
  	/>
  	{props.children}
  </li>
}

export default TodoItem