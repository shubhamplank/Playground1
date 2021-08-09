import { useState } from "react";

import Header from "./components/Layout/Header"; // Can this be Refactored ?
import Meals from "./components/Meals/Meals"; 
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {  // Can this be Refactored ?
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return ( // What is HOC ?
    <CartProvider>   
      {cartIsShown && <Cart onClose={hideCartHandler} />}  
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
