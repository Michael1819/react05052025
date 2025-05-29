import React, { useState } from "react";
import Solution from "./Solution";

type Product = {
  name: string;
  price: number;
};

const productList: Product[] = [
  { name: "Apple", price: 0.99 },
  { name: "Banana", price: 0.49 },
  { name: "Mango", price: 1.99 },
  { name: "Strawberry", price: 2.49 },
];

async function fetchProducts(): Promise<Product[]> {
  return new Promise((resolve) =>
    setTimeout(() => resolve(productList), 1000)
  );
}

export default function CartTable() {
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

  function increment(name: string) {
    setQuantities((prev) => ({
      ...prev,
      [name]: (prev[name] || 0) + 1,
    }));
  };

  function decrement(name: string) {
    setQuantities((prev) => ({
      ...prev,
      [name]: Math.max((prev[name] || 0) - 1, 0),
    }));
  };

  function getTotalPrice() {
    return productList.reduce((total, product) => {
      const n = quantities[product.name] || 0;
      return total + n * product.price;
    }, 0);
  };

  function emptyCart() {
    setQuantities({});
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      
      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((product) => (
            <tr key={product.name}>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>
                <button onClick={() => decrement(product.name)}>-</button>
                <span style={{ margin: "0 10px" }}>
                  {quantities[product.name] || 0}
                </span>
                <button onClick={() => increment(product.name)}>+</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Total price: ${getTotalPrice().toFixed(2)}</h3>
      <button>Checkout</button>
      <button onClick={emptyCart} style={{ marginLeft: 10 }}>
        Empty Cart
      </button>
    </div>
  );
}
