import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task.js';

const ListTask = () => {
  const tasks = useSelector((state) => state.tasks);

  return (
    <div className="list-task">
      {/* Map through tasks array and render Task component for each task */}
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;