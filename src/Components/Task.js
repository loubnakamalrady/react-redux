import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, editTask, toggleTaskStatus } from '../actions/taskActions';

const Task = ({ task }) => {
  const [editedDescription, setEditedDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleDescriptionChange = (event) => {
    setEditedDescription(event.target.value);
  };

  const handleEditTask = () => {
    dispatch(editTask(task.id, editedDescription));
  };

  const handleToggleStatus = () => {
    dispatch(toggleTaskStatus(task.id));
  };

  const handleDeleteTask = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <div className="task">
      {/* Checkbox to toggle task status */}
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={handleToggleStatus}
      />
      {/* Input field for task description */}
      <input
        type="text"
        value={editedDescription}
        onChange={handleDescriptionChange}
      />
      {/* Button to edit the task */}
      <button onClick={handleEditTask}>Edit</button>
      {/* Button to delete the task */}
      <button onClick={handleDeleteTask}>Delete</button>
    </div>
  );
};

export default Task;