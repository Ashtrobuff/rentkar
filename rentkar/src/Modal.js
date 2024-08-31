import React, { useState } from 'react';

function Modal({ todo, onSave, onClose }) {
  const [title, setTitle] = useState(todo.title);

  const handleSave = () => {
    onSave({ ...todo, title });
    onClose();
  };

  return (
    <div style={popupStyles.container}>
      <div style={popupStyles.modal}>
        <h2>Edit Todo</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={popupStyles.input}
        />
        <button onClick={handleSave} style={popupStyles.button}>Save</button>
        <button onClick={onClose} style={popupStyles.button}>Cancel</button>
      </div>
    </div>
  );
}

const popupStyles = {
  container: {
    display:'flex',
    justifyContent: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding:5
  },
  modal: {
    display:'flex',
    backgroundColor:'#fff',
    flexDirection:'column',
    padding: 20,
    width:300,
    borderRadius: '5px',
    textAlign: 'center',
  },
  input: {
    padding: 20,
    marginBottom: '10px',
  },
  button: {
    margin: '5px',
    padding: '10px 20px',
    cursor: 'pointer',
  },
};

export default Modal;