import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos, addTodo, updateTodo, deleteTodo } from './actions/todoActions';
import Modal from './Modal'
import SabpaisaPaymentGateway from './SabpaisaPaymentGateway';
import { useNavigate } from 'react-router-dom';

const TodoApp = () => {
    const [newTodo, setNewTodo] = useState('');
    const [editTodo, setEditTodo] = useState(null);
    const dispatch = useDispatch();
    const navigation=useNavigate()
    const { todos, loading, error } = useSelector(state => state.todos);
    useEffect(() => {
      dispatch(getTodos());
    }, [dispatch]);
  
    const handleAddTodo = () => {
      if (newTodo.trim()) {
        dispatch(addTodo(newTodo));
        setNewTodo('');
      }
    };
  
    const handleUpdateTodo = (updatedTodo) => {
      dispatch(updateTodo(updatedTodo._id, updatedTodo));
    };
  
    const handleDeleteTodo = (id) => {
      dispatch(deleteTodo(id));
    };
  
    const openEditPopup = (todo) => {
      setEditTodo(todo);
    };
  
    const closeEditPopup = () => {
      setEditTodo(null);
    };
    const removePay=()=>{
      localStorage.setItem('paymentStatus','False')
      navigation("/payment")
      
    }
  return (
    <div style={{height:'100%',width:'100%',backgroundColor:'black', display:'flex', alignItems:'center',justifyContent:'center'}}>
      <div className='bg-slate-400 flex flex-col p-10 rounded-lg w-fit'>
        <h1 className='text-center mb-5 font-bold text-3xl'>My Todos</h1>
        <div className='flex flex-row justify-evenly bg-slate-600 p-10 mb-2'>
          <label>Todo Contents</label>
      <input 
      className='rounded-full p-2 w-full'
      placeholder='enter todo...'
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button className='bg-orange-500 rounded-lg p-2 ml-10 flex flex-row w-full text-center items-center justify-center' onClick={handleAddTodo}>Add Todo</button>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && !error && (
        <ul>
          {todos.map(todo => (
            <li key={todo._id}>
              <span
                onClick={() => handleUpdateTodo({ ...todo, completed: !todo.completed })}
                style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
              >
                {todo.title}
              </span>
              <button onClick={() => openEditPopup(todo)}>Edit</button>
              <button onClick={() => handleDeleteTodo(todo._id)}>Delete</button>
            
            </li>
          ))}
        </ul>
      )}
  <button onClick={()=>removePay()}>Unsubscribe</button>
      {editTodo && (
        <Modal
          todo={editTodo}
          onSave={handleUpdateTodo}
          onClose={closeEditPopup}
        />
      )}
      </div>
    </div>
  )
}

export default TodoApp