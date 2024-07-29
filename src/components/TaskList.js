// src/components/TaskList.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchTasksRequest,
  addTaskRequest,
  updateTaskRequest,
  removeTaskRequest,
} from '../redux/actions';
import UpdateTaskModal from './UpdateTaskModal';

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    dispatch(fetchTasksRequest());
  }, [dispatch]);

  const handleAddTask = () => {
    if (newTaskTitle) {
      dispatch(addTaskRequest({ title: newTaskTitle, body: newTaskTitle }));
      setNewTaskTitle('');
    }
  };

  const handleUpdateTask = (task) => {
    dispatch(updateTaskRequest(task));
  };

  const handleRemoveTask = (taskId) => {
    dispatch(removeTaskRequest(taskId));
  };

  const sortedTasks = tasks.slice().sort((a, b) => b.id - a.id);

  return (
    <div>
      <h1>Liste des taches</h1>
      <div className='flex'>
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="Nouvelle tache" className='form-control'
        />
      <button className='btn btn-primary' onClick={handleAddTask}>Ajouter</button>
      </div>
     
      <ul>
        {sortedTasks.map((task) => (
          <li key={task.id}>
            {task.title} - {task.completed ? 'Completed' : 'Pending'}
            <button className='btn btn-update' onClick={() => setSelectedTask(task)}>Modifier</button>
            <button className='btn btn-remove' onClick={() => handleRemoveTask(task.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
      {selectedTask && (
        <UpdateTaskModal
          isOpen={!!selectedTask}
          onRequestClose={() => setSelectedTask(null)}
          task={selectedTask}
          onUpdateTask={handleUpdateTask}
        />
      )}
    </div>
  );
};

export default TaskList;
