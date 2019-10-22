import React, { useEffect, useRef } from 'react';

import classes from './Cockpit.module.css';

const Cockpit = props => {
  const toggleBtnRef = useRef(null);
  useEffect(() => {
    toggleBtnRef.current.click();
    return () => {
      console.log('Clean up work in useEffect');
    };
  }, []);

  useEffect(() => {
    console.log('Clean up work in 2nd useEffect');
  });

  const assignedClasses = [];
  let btnClass = '';

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }

  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really work!</p>
      <p>Attention => the arrow function syntax is not recommended</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default Cockpit;
