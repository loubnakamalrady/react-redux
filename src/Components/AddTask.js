import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions/taskActions';

const AddTask = () => {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleAddTask = () => {
    const newTask = {
      id: Date.now(),
      description,
      isDone: false,
    };
    dispatch(addTask(newTask));
    setDescription('');
  };

  return (
    <div className="add-task">
      {/* Input field for task description */}
      <input
        type="text"
        placeholder="Enter task description"
        value={description}
        onChange={handleDescriptionChange}
      />
      {/* Button to add the task */}
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTask;