import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos, addTodo, updateTodo, deleteTodo } from './actions/todoActions';
import Modal from './Modal'
import SabpaisaPaymentGateway from './SabpaisaPaymentGateway';
import { useNavigate } from 'react-router-dom';
import TodoCard from './components/Todocard';

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
      <div className='flex flex-col p-10 rounded-lg' style={{backgroundColor:"	#303030",width:800}}>
        <h1 className='text-center mb-5 font-bold text-3xl text-white'>My Todos</h1>
        <div className='flex flex-row justify-evenly  p-10 rounded-lg' style={{backgroundColor:"#707070"}}>
      
      <input 
      className='rounded-full p-5 w-full focus:outline-none  focus:outline-orange-400'
      placeholder='enter todo...'
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button className='bg-orange-500 font-bold text-2xl text-white  rounded-full p-2 ml-10 flex flex-row w-full text-center items-center justify-center focus:outline-none hover:scale-105' onClick={handleAddTodo}>Add Todo</button>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && !error && (
        <ul>
          {todos.map(todo => (
           <div key={todo._id} className='rounded-md mt-2 flex flex-row justify-evenly p-5 mb-2' style={{backgroundColor:"#707070"}}>
              <div 
                onClick={() => handleUpdateTodo({ ...todo, completed: !todo.completed })}
                style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
                className='font-bold text-white w-40 flex items-center justify-center whitespace-nowrap overflow-hidden text-ellipsis block'
              >
               
                {todo.title}
              </div>
              <div>
              <button className='bg-orange-500 px-5 font-bold text-white h-10 rounded-full mr-5' onClick={() => openEditPopup(todo)}>Edit</button>
              <button className='bg-red-400 px-5 font-bold text-white h-10 rounded-full' onClick={() => handleDeleteTodo(todo._id)}>Delete</button>
              </div>
            </div>
        
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