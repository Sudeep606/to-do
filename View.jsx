import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from '../store';

function View() {
    const dispatch = useDispatch();
    const todos = useSelector(state => state);
    const selectedTodos = todos.filter(todo => todo.completed);
  
    const handleAddTodo = () => {
      const newTodo = {
        id: Date.now(),
        text: `New Todo ${todos.length + 1}`,
        completed: false,
      };
      dispatch(addTodo(newTodo));
    };
  
    const handleToggleTodo = id => {
      dispatch(toggleTodo(id));
    };
  
    const handleDeleteTodo = id => {
      dispatch(deleteTodo(id));
    };
    console.log(handleDeleteTodo.length);
   
  return (
    <>
          <div >
      <h1>ToDo</h1>
      <input onClick={onchange} type="text" placeholder='insert' />
      <button className='btn btn-primary' style={{marginLeft:'10px'}} onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTodo(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button className='btn btn-danger' onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
          
        ))}
      </ul>
    </div>
    <p>Total complete items Todos: {selectedTodos.length}</p>

    </>
  )
}

export default View
