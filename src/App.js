import React from 'react';
import AddTask from './Components/AddTask';
import ListTask from './Components/listTask';

const App = () => {
  return (
    <div className="app">
      {/* Page title */}
      <h1>Todo List</h1>
      
      {/* Component for adding a new task */}
      <AddTask />
      
      {/* Component for displaying the list of tasks */}
      <ListTask />
    </div>
  );
};

export default App;