import React from 'react';
import classes from './Person.module.css';

const person = props => {
  console.log(classes.Person);
  return (
    <div className={classes.Person}>
      <p onClick={props.click}>
        I'm {props.name} person and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type='text' onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
