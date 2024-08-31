/*import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos, addTodo, updateTodo, deleteTodo } from './actions/todoActions'
import SabpaisaPaymentGateway from './SabpaisaPaymentGateway';
import SabParent from './SabParent';
import {useParams} from 'react-router-dom'
function App() {
  const [newTodo, setNewTodo] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.todos);
  const loading = useSelector(state => state.todos.loading);
  const {status}=useParams();
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  const handleAddTodo = () => {
    dispatch(addTodo(newTodo));
    setNewTodo('');
  };

  const handleUpdateTodo = (id, completed) => {
    dispatch(updateTodo(id, { completed: !completed }));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      <SabParent/>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {todos.map(todo => (
            <li key={todo._id}>
              <span
                onClick={() => handleUpdateTodo(todo._id, todo.completed)}
                style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              >
                {todo.title}
              </span>
              <button onClick={() => handleDeleteTodo(todo._id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}


export default App;
*/

// App.js
import React from 'react';
import { useState,useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useNavigation } from 'react-router-dom';
import TodoApp from './TodoApp';
import SabParent from './SabParent'; // Replace with your payment component

import SabpaisaPaymentGateway from './SabpaisaPaymentGateway';
import CheckPaymentStatus from './CheckPaymentStatus';
import { Navigate } from 'react-router-dom';
function App() {

  const ProtectedRoute = ({ element }) => {
    const isPaymentSuccessful = localStorage.getItem('paymentStatus') === 'SUCCESS';
    return isPaymentSuccessful ? element : <Navigate to="/payment" />;
  };
  return (
    <BrowserRouter className="bg-black h-full w-full">
      <CheckPaymentStatus />
      <Routes>
        <Route path="/payment" element={<SabParent/>}/>
        <Route
          path="/"
          element={
            <ProtectedRoute className="h-full w-full" element={<TodoApp/>}/>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
