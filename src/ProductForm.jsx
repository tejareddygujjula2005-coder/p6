import React, { useState } from "react";

function ProductForm({ onAddProduct }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedName = name.trim();
    const trimmedCategory = category.trim();
    const numericPrice = Number(price);

    if (!trimmedName || !trimmedCategory || price.trim() === "") {
      setError("Please fill in all fields.");
      return;
    }

    if (!Number.isFinite(numericPrice) || numericPrice <= 0) {
      setError("Price must be a valid number greater than zero.");
      return;
    }

    onAddProduct({
      name: trimmedName,
      price: numericPrice,
      category: trimmedCategory,
      icon: "🛍️"
    });

    setName("");
    setPrice("");
    setCategory("");
    setError("");
  }

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h2>Add New Product</h2>

      <label htmlFor="product-name">Product Name</label>
      <input
        id="product-name"
        type="text"
        placeholder="e.g. Headphones"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />

      <label htmlFor="product-price">Price (USD)</label>
      <input
        id="product-price"
        type="number"
        placeholder="e.g. 49.99"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
        min="0.01"
        step="0.01"
        required
      />

      <label htmlFor="product-category">Category</label>
      <input
        id="product-category"
        type="text"
        placeholder="e.g. Accessories"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
        required
      />

      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}

      <button type="submit">Add Product</button>
    </form>
  );
}

export default ProductForm;
