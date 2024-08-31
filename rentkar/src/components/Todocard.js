// TodoItem.js
import React, { useState } from 'react';

const TodoCard = ({ todo, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  // Handle deleting a todo
  const handleDelete = () => {
    onDelete(todo._id);
  };

  // Handle toggling completion of a todo
  const handleToggleComplete = () => {
    onUpdate(todo._id, { completed: !todo.completed });
  };

  // Handle starting the edit process
  const handleEdit = () => {
    setIsEditing(true);
  };

  // Handle submitting the edit
  const handleSubmitEdit = (e) => {
    e.preventDefault();
    onUpdate(todo._id, { title: newTitle });
    setIsEditing(false);
  };

  // Handle cancelling the edit
  const handleCancelEdit = () => {
    setIsEditing(false);
    setNewTitle(todo.title);  // Reset the title to the original
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px', border: '1px solid #ccc', marginBottom: '8px' }}>
      {isEditing ? (
        <form onSubmit={handleSubmitEdit} style={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <input 
            type="text" 
            value={newTitle} 
            onChange={(e) => setNewTitle(e.target.value)} 
            style={{ flexGrow: 1, marginRight: '8px' }} 
            autoFocus
          />
          <button type="submit" style={{ marginRight: '8px' }}>Save</button>
          <button type="button" onClick={handleCancelEdit}>Cancel</button>
        </form>
      ) : (
        <div 
          style={{ flexGrow: 1, textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }} 
          onDoubleClick={handleEdit}
        >
          {todo.title}
        </div>
      )}
      <div>
        <button onClick={handleToggleComplete} style={{ marginRight: '8px' }}>
          {todo.completed ? 'Undo' : 'Complete'}
        </button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default TodoCard;
