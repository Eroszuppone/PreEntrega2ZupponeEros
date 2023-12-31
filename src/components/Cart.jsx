import React from 'react';

const Cart = ({ cart }) => {
  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
      <p>Total: ${cart.reduce((acc, product) => acc + product.price, 0)}</p>
    </div>
  );
};

export default Cart;
