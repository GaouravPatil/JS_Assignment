import { useState } from "react";

const EMPTY_FORM = {
  name: "",
  price: "",
  category: "",
  stock: ""
};

function ProductForm({ onCreate }) {
  const [form, setForm] = useState(EMPTY_FORM);
  const [submitting, setSubmitting] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const payload = {
      name: form.name.trim(),
      category: form.category.trim(),
      price: Number(form.price),
      stock: Number(form.stock)
    };

    if (
      !payload.name ||
      !payload.category ||
      Number.isNaN(payload.price) ||
      Number.isNaN(payload.stock)
    ) {
      return;
    }

    setSubmitting(true);
    const created = await onCreate(payload);
    setSubmitting(false);

    if (created) {
      setForm(EMPTY_FORM);
    }
  }

  return (
    <section className="panel">
      <h2>Add a product</h2>
      <p className="panel-hint">Send a POST request to /api/products</p>

      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="product-name">Name</label>
        <input
          id="product-name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          placeholder="e.g. Wireless Keyboard"
          required
        />

        <label htmlFor="product-category">Category</label>
        <input
          id="product-category"
          name="category"
          type="text"
          value={form.category}
          onChange={handleChange}
          placeholder="e.g. Electronics"
          required
        />

        <div className="field-row">
          <div>
            <label htmlFor="product-price">Price</label>
            <input
              id="product-price"
              name="price"
              type="number"
              min="0"
              step="0.01"
              value={form.price}
              onChange={handleChange}
              placeholder="0.00"
              required
            />
          </div>

          <div>
            <label htmlFor="product-stock">Stock</label>
            <input
              id="product-stock"
              name="stock"
              type="number"
              min="0"
              step="1"
              value={form.stock}
              onChange={handleChange}
              placeholder="0"
              required
            />
          </div>
        </div>

        <button className="btn primary" type="submit" disabled={submitting}>
          {submitting ? "Saving..." : "Create product"}
        </button>
      </form>
    </section>
  );
}

export default ProductForm;
