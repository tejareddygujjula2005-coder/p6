import React, { useState } from "react";

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2
});

function ProductCard({ product, onAddToCart }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className={`product-card${hovered ? " hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="product-icon" aria-hidden="true">
        {product.icon}
      </div>
      <h3>{product.name}</h3>
      <p className="price">{currencyFormatter.format(product.price)}</p>
      <p className="category">{product.category}</p>
      <button type="button" onClick={() => onAddToCart(product)}>
        Add to Cart
      </button>
    </article>
  );
}

export default ProductCard;
