import React, { useRef, useState } from "react";
import ProductCard from "./ProductCard.jsx";
import ProductForm from "./ProductForm.jsx";

const initialProducts = [
  {
    id: 1,
    name: "Laptop",
    price: 999,
    category: "Electronics",
    icon: "💻"
  },
  {
    id: 2,
    name: "Mouse",
    price: 29,
    category: "Accessories",
    icon: "🖱️"
  },
  {
    id: 3,
    name: "Keyboard",
    price: 79,
    category: "Accessories",
    icon: "⌨️"
  }
];

function ProductList() {
  const [products, setProducts] = useState(initialProducts);
  const [cartCount, setCartCount] = useState(0);
  const [cartMessage, setCartMessage] = useState("");
  const nextProductId = useRef(initialProducts.length + 1);

  function handleAddProduct(product) {
    setProducts((currentProducts) => [
      ...currentProducts,
      { ...product, id: nextProductId.current++ }
    ]);
  }

  function handleAddToCart(product) {
    setCartCount((count) => count + 1);
    setCartMessage(`${product.name} added to cart.`);
  }

  return (
    <div className="container">
      <header className="header">
        <div>
          <h1>Product Store</h1>
          <p>Discover your favourite products</p>
        </div>

        <div className="cart" aria-live="polite">
          <span aria-hidden="true">🛒</span> Cart Items: {cartCount}
        </div>
      </header>

      <p className="screen-reader-only" role="status" aria-live="polite">
        {cartMessage}
      </p>

      <ProductForm onAddProduct={handleAddProduct} />

      <h2 className="section-title">Product List</h2>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
