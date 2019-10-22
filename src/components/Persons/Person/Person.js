import PropTypes from 'prop-types';
import React from 'react';

import classes from './Person.module.css';


const Person = props => {
  return (
    <div className={classes.Person}>
      <p onClick={props.click}>
        I'm a {props.name} and I am {props.age} years old
      </p>
      <p>{props.children}</p>
      <input 
      type='text' 
      onChange={props.changed} 
      value={props.name} />
    </div>
  );
};

Person.prototype = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default Person;
