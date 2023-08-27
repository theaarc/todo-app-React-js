import { createStore, combineReducers } from 'redux';
import tasksReducer from './reducers/tasks';

const rootReducer = combineReducers({
  tasks: tasksReducer,
});

const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
const initialState = {
  tasks: storedTasks,
};

const store = createStore(rootReducer, initialState);

store.subscribe(() => {
  const tasks = store.getState().tasks;
  localStorage.setItem('tasks', JSON.stringify(tasks));
});

export default store;


// import { createStore, combineReducers } from 'redux';
// import tasksReducer from './reducers/tasks'; // Import your tasks reducer

// const rootReducer = combineReducers({
//   tasks: tasksReducer,
// });

// const store = createStore(rootReducer);

// export default store;
