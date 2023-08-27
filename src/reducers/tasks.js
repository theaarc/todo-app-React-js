import { ADD_TASK, TOGGLE_TASK, EDIT_TASK_TEXT, DELETE_TASK, UPDATE_TASKS } from '../actions'; // Import your action types

const initialState = {
  tasks: [],
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, { id: Date.now(), text: action.payload, completed: false }];

    case TOGGLE_TASK:
      return state.map((task) =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );

    case EDIT_TASK_TEXT:
      console.log('Reducer processing EDIT_TASK_TEXT action');
      return state.map(task => {
        if (task.id === action.taskId) {
          return {
            ...task,
            text: action.newText,
          };
        }
        return task;
      });
  
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.taskId),
      };

    case UPDATE_TASKS:
      return {
        ...state,
        tasks: action.updatedTasks,
      };
        
    default:
      return state;
  }
};

export default tasksReducer;
