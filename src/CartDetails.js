import React, { useEffect, useState } from 'react';
import './CartDetails.css'; 
const CartDetails = () => {


        const [phoneNumber, setPhoneNumber] = useState('+917871548004');
        const textRepresentation = JSON.stringify(localStorage.getItem('cart'), null, 2);

console.log(textRepresentation);
        const [message, setMessage] = useState(textRepresentation || '');
      
        // Update the link with the dynamic values
        useEffect(() => {
          const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
          document.querySelector('#whatsappButton').href = whatsappLink;
        }, [phoneNumber, message]);
      
        const handleSendMessage = () => {
          // Your custom logic for sending the message
          console.log('Sending WhatsApp message:', message);
        };

  const [cartItems, setCartItems] = useState([]);

  const removeFromCart = (index) => {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    existingCart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(existingCart));
    displayCart();
  };

  const displayCart = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(cartItems);
  };

  useEffect(() => {
    displayCart();
  }, []);

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Cart Details</h1>

      <div id="cart-items">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} />
              <p>Name: {item.name}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ₹{item.price.toFixed(2)}</p>
              <span className="remove-from-cart" onClick={() => removeFromCart(index)}>
                Remove
              </span>
            </div>
          ))
        )}
      </div>

      <div className="cart-total">
        <p>Total: ₹{total.toFixed(2)}</p>
      </div>

     <div>
      <h1>Send SMS via WhatsApp</h1>

      <a id="whatsappButton" href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`} target="_blank">
        <button onClick={handleSendMessage}>Send WhatsApp Message</button>
      </a>
    </div>

    </div>
  );
};

export default CartDetails;
