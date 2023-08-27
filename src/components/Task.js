import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toggleTask, editTaskText } from '../actions';

const Task = ({ tasks, toggleTask, editTaskText }) => {
  const { taskId } = useParams(); // Use the useParams hook
  const task = tasks.find(task => task.id.toString() === taskId);

  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  if (!task) {
    return <div>Loading...</div>; // Handle the case when task is not available yet
  }

  const handleToggle = () => {
    toggleTask(task.id);
  };

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  const handleTextChange = event => {
    setEditedText(event.target.value);
  };

  const handleSave = () => {
    editTaskText(task.id, editedText);
    setIsEditing(false);
  };
  

  return (
    <div>
      <h2>Task Details</h2>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleToggle}
      />
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedText}
            onChange={handleTextChange}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div onDoubleClick={toggleEditMode}>
          <span>{task.text}</span>
          <button onClick={toggleEditMode}>Edit</button>
        </div>
      )}
    </div>
  );
  
};

const mapStateToProps = state => ({
  tasks: state.tasks,
});

const mapDispatchToProps = {
  toggleTask,
  editTaskText,
};

export default connect(mapStateToProps, mapDispatchToProps)(Task);



// import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import { toggleTask } from '../actions';

// const Task = ({ task, toggleTask }) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedText, setEditedText] = useState(task.text);

//   const handleToggle = () => {
//     toggleTask(task.id);
//   };

//   const handleEdit = () => {
//     setIsEditing(true);
//   };

//   const handleSave = () => {
//     setIsEditing(false);
//     // Implement logic to save edited text in the Redux store
//   };

//   if (!task) {
//     return <div>Loading...</div>; // Handle the case when task is not available yet
//   }

//   return (
//     <div>
//       <h2>Task Details</h2>
//       <input
//         type="checkbox"
//         checked={task.completed}
//         onChange={handleToggle}
//       />
//       {isEditing ? (
//         <input
//           type="text"
//           value={editedText}
//           onChange={(e) => setEditedText(e.target.value)}
//           onBlur={handleSave}
//         />
//       ) : (
//         <span onDoubleClick={handleEdit}>
//           {task.text}
//         </span>
//       )}
//     </div>
//   );
// };

// const mapStateToProps = (state, ownProps) => {
//     console.log(ownProps.match);
//   const taskId = ownProps.match?.params?.taskId; // Safely access the parameter
//   const task = state.tasks.find(task => task.id.toString() === taskId);
//   console.log(task);
//   return {
//     task,
//   };
// };

// const mapDispatchToProps = {
//   toggleTask,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Task);
