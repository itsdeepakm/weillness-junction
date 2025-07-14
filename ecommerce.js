"use client";

import React, { useState } from "react";

const products = [
  { id: 1, name: "T-Shirt", price: 20 },
  { id: 2, name: "Jeans", price: 40 },
  { id: 3, name: "Jacket", price: 60 },
];

export default function H() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>🛒 Simple E-commerce</h1>

      <div style={styles.products}>
        {products.map((product) => (
          <div key={product.id} style={styles.card}>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)} style={styles.button}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div style={styles.cart}>
        <h2>🧺 Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>{item.name} - ${item.price}</li>
            ))}
          </ul>
        )}
        <h3>Total: ${getTotal()}</h3>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial",
    padding: "2rem",
    maxWidth: "800px",
    margin: "0 auto",
  },
  header: {
    textAlign: "center",
  },
  products: {
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
    flexWrap: "wrap",
    marginBottom: "2rem",
  },
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "1rem",
    width: "150px",
    textAlign: "center",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },
  button: {
    marginTop: "0.5rem",
    padding: "0.5rem 1rem",
    backgroundColor: "#4f46e5",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  cart: {
    marginTop: "2rem",
    borderTop: "1px solid #ccc",
    paddingTop: "1rem",
  },
};
