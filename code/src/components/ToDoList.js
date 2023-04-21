/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks';
import './ToDoList.css';
import delete1 from '../img/delete1.png';

export const ToDoList = () => {
  const dispatch = useDispatch();
  // useSelector is a hook that allows us to access the store
  const allTasks = useSelector((store) => store.tasks);
  const checkboxToggle = (id) => {
    dispatch(tasks.actions.toggleComplete(id));
  };

  return (
    <section className="task-list">
      <div className="grow">
        {/* map over the tasks array and render a checkbox and a task for each task  */}
        {allTasks.map((task) => (
          <div className="task-container">
            <div className="task">
              <input
                key={task.id}
                task={task}
                type="checkbox"
                value={task.isComplete}
                onChange={() => checkboxToggle(task.id)}
              />
              <p>{task.text}</p>
              <p>{task.emoji}</p>
              <button
                className="task-button"
                type="button"
                onClick={() => dispatch(tasks.actions.removeTask(task.id))}
              >
                <img src={delete1} alt="delete" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
