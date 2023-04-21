/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import { tasks } from 'reducers/tasks';
import { useDispatch, useSelector } from 'react-redux';
import './Header.css';
import remove from '../img/remove.png';

export const Header = () => {
  const dispatch = useDispatch();
  const numberOfTasks = useSelector((store) => store.tasks.length);
  // const completedTasks = tasks.filter((task) => task.isComplete);

  // const allDone = () => {
  //   if (tasks.length === completedTasks.length) {
  //     return 'You are all done!';
  //   }
  //   return `${completedTasks.length} out of ${tasks.length} tasks completed`;
  // };

  return (
    <div className="header">
      <div className="header-only">
        <header>
          <div className="header-container">
            <h1>My To Do List ✅ </h1>
            <h4># {numberOfTasks} remaining todos</h4>
            <div className="clear-all">
              <button
                className="clear-all-button"
                type="button"
                onClick={() => dispatch(tasks.actions.clearAll())}
              >
                Clear all <img src={remove} alt="remove" />
              </button>
            </div>
          </div>
          <div className="all-done">{/* <h4>{allDone()}</h4> */}</div>
        </header>
      </div>
    </div>
  );
};
