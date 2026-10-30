import { useState } from "react";

const priceFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 2
});

function ProductCard({ product, onUpdate, onDelete }) {
  const [editing, setEditing] = useState(false);
  const [price, setPrice] = useState(String(product.price));
  const [stock, setStock] = useState(String(product.stock));
  const [saving, setSaving] = useState(false);

  function startEditing() {
    setPrice(String(product.price));
    setStock(String(product.stock));
    setEditing(true);
  }

  async function handleSave(event) {
    event.preventDefault();

    setSaving(true);
    const updated = await onUpdate(product._id, {
      price: Number(price),
      stock: Number(stock)
    });
    setSaving(false);

    if (updated) {
      setEditing(false);
    }
  }

  return (
    <article className="product-card">
      <div className="product-top">
        <span className="category">{product.category}</span>
        <span className={`stock ${product.stock <= 5 ? "low" : ""}`}>
          {product.stock} in stock
        </span>
      </div>

      <h3>{product.name}</h3>

      {editing ? (
        <form className="inline-form" onSubmit={handleSave}>
          <div className="field-row">
            <div>
              <label htmlFor={`price-${product._id}`}>Price</label>
              <input
                id={`price-${product._id}`}
                type="number"
                min="0"
                step="0.01"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor={`stock-${product._id}`}>Stock</label>
              <input
                id={`stock-${product._id}`}
                type="number"
                min="0"
                step="1"
                value={stock}
                onChange={(event) => setStock(event.target.value)}
                required
              />
            </div>
          </div>

          <div className="card-actions">
            <button className="btn primary small" type="submit" disabled={saving}>
              {saving ? "Saving..." : "Save"}
            </button>
            <button
              className="btn ghost small"
              type="button"
              onClick={() => setEditing(false)}
              disabled={saving}
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <>
          <p className="price">{priceFormatter.format(product.price)}</p>

          <div className="card-actions">
            <button
              className="btn ghost small"
              type="button"
              onClick={startEditing}
            >
              Edit price / stock
            </button>
            <button
              className="btn danger small"
              type="button"
              onClick={() => onDelete(product)}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </article>
  );
}

function ProductList({ products, loading, onUpdate, onDelete }) {
  return (
    <section className="panel">
      <h2>
        Product catalog <span className="count">{products.length}</span>
      </h2>
      <p className="panel-hint">MongoDB documents from the Products collection</p>

      {loading ? (
        <p className="empty">Loading products...</p>
      ) : products.length === 0 ? (
        <p className="empty">
          No products yet. Add the first product using the form.
        </p>
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default ProductList;
