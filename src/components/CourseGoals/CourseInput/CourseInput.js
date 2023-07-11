import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = (props) => {
  const [isVaild, setIsVaild] = useState(true);

  const [enteredValue, setEnteredValue] = useState('');

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    enteredValue.trim().length === 0 ? setIsVaild(false) : setIsVaild(true);
    if (enteredValue.trim().length === 0) {
      setIsVaild(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='form-control'>
        <label>Today's Goals</label>
        <input
          style={{ borderColor: isVaild ? 'black' : 'red' }}
          type='text'
          onChange={goalInputChangeHandler}
        />
      </div>
      {isVaild ? null : (
        <p style={{ color: 'red' }}>Please enter a valid goal!</p>
      )}
      <Button type='submit'>Add Goal</Button>
    </form>
  );
};

export default CourseInput;
