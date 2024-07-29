// src/components/UpdateTaskModal.js
import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const UpdateTaskModal = ({ isOpen, onRequestClose, task, onUpdateTask }) => {
  const [title, setTitle] = useState(task.title);
  const [completed, setCompleted] = useState(task.completed);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateTask({ ...task, title, completed });
    onRequestClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Mettre à jour une tache</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label > Titre :</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className='form-control my-2'
            />
        </div>
        <div>
          <label> Compléte:</label>
            <input
              type="checkbox"
              checked={completed}
              onChange={(e) => setCompleted(e.target.checked)}
              className='my-2'
            />
        </div>
        <div  className='my-2'>
          <button type="submit" className='btn btn-update'>Mettre à jour</button>
          <button type="button" className='btn btn-primary' onClick={onRequestClose}>Annuler</button>
        </div>
      </form>
    </Modal>
  );
};

export default UpdateTaskModal;
