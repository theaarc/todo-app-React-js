import React from 'react';
import TaskList from '../components/TaskList';
import { connect } from 'react-redux';
import { addTask, toggleTask } from '../actions';

const Home = ({ tasks, addTask, toggleTask }) => {
  const handleAddTask = (taskText) => {
    addTask(taskText);
  };

  return (
    <div>
      <TaskList tasks={tasks} toggleTask={toggleTask} />
      <input
        type="text"
        placeholder="Enter task"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleAddTask(e.target.value);
            e.target.value = '';
          }
        }}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

const mapDispatchToProps = {
  addTask,
  toggleTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
