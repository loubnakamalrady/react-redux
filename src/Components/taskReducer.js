import {
    ADD_TASK,
    EDIT_TASK,
    TOGGLE_TASK_STATUS,
    DELETE_TASK,
  } from '../actions/taskActions';
  
  const initialState = [];
  
  const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TASK:
        // Add the new task to the state
        return [...state, action.payload];
      case EDIT_TASK:
        // Find the task by ID and update its description
        return state.map((task) =>
          task.id === action.payload.id
            ? { ...task, description: action.payload.description }
            : task
        );
      case TOGGLE_TASK_STATUS:
        // Find the task by ID and toggle its 'isDone' status
        return state.map((task) =>
          task.id === action.payload ? { ...task, isDone: !task.isDone } : task
        );
      case DELETE_TASK:
        // Filter out the task with the specified ID from the state
        return state.filter((task) => task.id !== action.payload);
      default:
        return state;
    }
  };
  
  export default taskReducer;