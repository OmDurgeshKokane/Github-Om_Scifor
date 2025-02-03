import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, updateQuantity } from "../features/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.cartItems.length === 0 ? <p>Cart is empty</p> : null}
      <ul className="cart-items">
        {cart.cartItems.map((item) => (
          <li key={item.id} className="cart-item">
            <span>{item.name} - ₹{item.price} x {item.quantity}</span>
            <div>
              <button onClick={() => dispatch(addToCart(item))}>+</button>
              <button 
                onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                disabled={item.quantity === 1}
              >-</button>
              <button onClick={() => dispatch(removeFromCart(item))}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <h3>Total Quantity: {cart.totalQuantity}</h3>
      <h3>Total Price: ₹{cart.totalPrice}</h3>
    </div>
  );
};

export default Cart;
