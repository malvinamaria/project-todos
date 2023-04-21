/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import { useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks';
import './AddNewTask.css';
import swal from 'sweetalert';
import plus from '../img/plus.png';

function getOrdinalSuffix(day) {
  if (day >= 11 && day <= 13) {
    return 'th';
  }
  switch (day % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}
// Create a functional component named 'AddNewTask'
export const AddNewTask = () => {
  const date = new Date();
  const month = date.toLocaleString('default', { month: 'long' });
  const day = date.getDate();
  const ordinal = getOrdinalSuffix(day);
  const year = date.getFullYear();
  // Use the useDispatch hook to get access to the Redux dispatch function
  const dispatch = useDispatch();
  // Use the useState hook to declare a new state variable 'newTaskValue'
  const [newTaskValue, setNewTaskValue] = React.useState('');

  // Define a function to handle the form submission
  const onFormSubmit = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();
    // Check if the new task input field is empty
    if (newTaskValue === '') {
      // If it is, show an alert to the user
      swal({
        title: 'Please enter a task',
        text: 'You need to enter a task to add it to your list',
        icon: 'warning',
      });
      return;
    }

    // Dispatch an action to add the new task to the store
    dispatch(tasks.actions.addTask(newTaskValue));
    // Reset the value of the new task input field
    setNewTaskValue('');
  };
  // Render a section with a class name of 'add-new-task'
  return (
    <form className="form-container" onSubmit={onFormSubmit}>
      <h3>What do you need to do today?</h3>
      <h4>{`${month} ${day}${ordinal}, ${year}`}</h4>{' '}
      <label htmlFor="addTaskInput">
        <input
          className="add-task-input"
          type="text"
          value={newTaskValue}
          onChange={(event) => setNewTaskValue(event.target.value)}
          id="addTaskInput"
          placeholder="Add new task here"
        />
      </label>
      <button className="add-task-btn" type="submit">
        Task
        <img src={plus} alt="plus" />
      </button>
    </form>
  );
};
