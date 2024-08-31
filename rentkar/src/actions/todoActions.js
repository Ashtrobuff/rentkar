import axios from 'axios';

export const getTodos = () => async dispatch => {
  dispatch({ type: 'GET_TODOS_REQUEST' });
  try {
    const response = await axios.get('http://localhost:3001/todos');
    dispatch({ type: 'GET_TODOS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'GET_TODOS_FAILURE', payload: error.message });
  }
};

export const addTodo = (title) => async dispatch => {
  dispatch({ type: 'ADD_TODO_REQUEST' });
  try {
    const response = await axios.post('http://localhost:3001/todos', { title });
    dispatch({ type: 'ADD_TODO_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'ADD_TODO_FAILURE', payload: error.message });
  }
};

export const updateTodo = (id, todo) => async dispatch => {
  dispatch({ type: 'UPDATE_TODO_REQUEST' });
  try {
    const response = await axios.put(`http://localhost:3001/todos/${id}`, todo);
    dispatch({ type: 'UPDATE_TODO_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'UPDATE_TODO_FAILURE', payload: error.message });
  }
};

export const deleteTodo = (id) => async dispatch => {
  dispatch({ type: 'DELETE_TODO_REQUEST' });
  try {
    await axios.delete(`http://localhost:3001/todos/${id}`);
    dispatch({ type: 'DELETE_TODO_SUCCESS', payload: id });
  } catch (error) {
    console.log(error.message)
    dispatch({ type: 'DELETE_TODO_FAILURE', payload: error.message });
    console.log(error)
  }
};