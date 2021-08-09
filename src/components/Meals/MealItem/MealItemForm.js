import { useRef, useState } from 'react';

import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();   // Why Ref ?

  const submitHandler = (event) => {
    event.preventDefault();  // why preventDefault ?

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;   // why call the variable enteredAmountNumber ?

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);     
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>

      <Input                  // What other types of HTML input form could have been used here ? 
        ref={amountInputRef}  // Change to controled component
        label='Amount'
        input={{
          id: 'amount',
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
