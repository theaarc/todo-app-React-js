import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteTask, updateTasks } from '../actions';

const TaskList = ({ tasks, deleteTask, updateTasks }) => {

  const handleDelete = taskId => {
    const confirmed = window.confirm('Are you sure you want to delete this task?');
    if (confirmed) {
      deleteTask(taskId);
      const updatedTasks = tasks.filter(task => task.id !== taskId);
      updateTasks(updatedTasks); // Update Redux store
      updateLocalStorage(updatedTasks);
    }
  };

  const updateLocalStorage = updatedTasks => {
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.text} - 
          <Link to={`/task/${task.id}`}>View Task</Link>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks,
  deleteTask,
  updateTasks,
});

export default connect(mapStateToProps)(TaskList);



// import React from 'react';
// import { connect } from 'react-redux';
// import { toggleTask } from '../actions'; // Import your toggleTask action
// import { Link } from 'react-router-dom';

// const TaskList = ({ tasks, toggleTask }) => {
//   return (
//     <ul>
//       {tasks.map((task) => (
//         <li key={task.id}>
//           <input
//             type="checkbox"
//             checked={task.completed}
//             onChange={() => toggleTask(task.id)}
//           />
//           {task.text}
//           <Link to={`/task/${task.id}`}>View Task</Link>
//         </li>
//       ))}
//     </ul>
//   );
// };

// const mapStateToProps = (state) => ({
//   tasks: state.tasks,
// });

// const mapDispatchToProps = {
//   toggleTask,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
