import { useContext } from 'react';

import MealItemForm from './MealItemForm'; 
import classes from './MealItem.module.css';
import CartContext from '../../../store/cart-context';

const MealItem = (props) => {     // Why not destructured ?
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = amount => {
    cartCtx.addItem({  // Refactor
      id: props.id,
      name: props.name,
      amount: amount,  // why is enteredAmountNumber called amount here ??
      price: props.price
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} /> {/* addToCartHandler Vs onAddToCart: What is good naming convetion ? */}
      </div>
    </li>
  );
};

export default MealItem;
