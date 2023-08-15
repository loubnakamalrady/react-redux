// Action Types
export const ADD_TASK = 'ADD_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const TOGGLE_TASK_STATUS = 'TOGGLE_TASK_STATUS';
export const DELETE_TASK = 'DELETE_TASK';

// Action Creators
export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const editTask = (taskId, newDescription) => ({
  type: EDIT_TASK,
  payload: { id: taskId, description: newDescription },
});

export const toggleTaskStatus = (taskId) => ({
  type: TOGGLE_TASK_STATUS,
  payload: taskId,
});

export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: taskId,
});