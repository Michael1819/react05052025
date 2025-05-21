import React from 'react';

export default function ConditionalRendering() {
  const isLoggedIn = true;
  const hasNotifications = false;
  const userRole = 'admin'; // 可变为 'user' 或 'guest'
  const cartItems = ['Apple', 'Banana'];

  function renderGreeting() {
    if (isLoggedIn) {
      return <h2>Welcome back!</h2>;
    }
    return <h2>Please log in.</h2>;
  }

  return (
    <div>
      <h1>Conditional Rendering Examples</h1>

      {/* if branching */}  
      {renderGreeting()}

      {/* ternary operator */}
      <p>{cartItems.length > 0 ? 'You have items in your cart.' : 'Your cart is empty.'}</p>

      {/* logical and && */}
      {hasNotifications && <p>You have new notifications.</p>}

      {/* nested ternary operator */}
      <p>
        {userRole === 'admin'
          ? 'You have admin access.'
          : userRole === 'user'
          ? 'You are a regular user.'
          : 'Unknown role.'}
      </p>

      {/* conditional rendering list */}
      <ul>
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <li>Cart is empty.</li>
        )}
      </ul>

      {/* multiple conditions */}
      {isLoggedIn && cartItems.length > 0 && (
        <p>You are logged in and can proceed to checkout.</p>
      )}
    </div>
  );
}
