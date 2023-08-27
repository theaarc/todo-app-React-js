export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const EDIT_TASK_TEXT = 'EDIT_TASK_TEXT';
export const DELETE_TASK = 'DELETE_TASK';
export const UPDATE_TASKS = 'UPDATE_TASKS';

export const addTask = (taskText) => ({
  type: ADD_TASK,
  payload: taskText,
});

export const toggleTask = (taskId) => ({
  type: TOGGLE_TASK,
  payload: taskId,
});

export const editTaskText = (taskId, newText) => {  
  return {
    type: EDIT_TASK_TEXT,
    taskId,
    newText,
  };
};

export const deleteTask = taskId => ({
  type: DELETE_TASK,
  taskId,
});

export const updateTasks = updatedTasks => ({
  type: UPDATE_TASKS,
  updatedTasks,
});
