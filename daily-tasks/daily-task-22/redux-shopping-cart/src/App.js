import React from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./styles.css";  // Import global styles

const App = () => {
  return (
    <div className="container">
      <h1>Redux Shopping Cart</h1>
      <div className="main-content">
        <ProductList />
        <Cart />
      </div>
    </div>
  );
};

export default App;
