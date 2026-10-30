import { useEffect, useRef, useState } from "react";
import api, { getErrorMessage } from "./api";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import "./App.css";

const TABS = [
  { id: "users", label: "Users" },
  { id: "products", label: "Products" }
];

function App() {
  const [activeTab, setActiveTab] = useState("users");
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [apiOnline, setApiOnline] = useState(true);
  const [notice, setNotice] = useState(null);
  const noticeTimer = useRef(null);

  useEffect(() => {
    if (!notice) {
      return;
    }

    clearTimeout(noticeTimer.current);
    noticeTimer.current = setTimeout(() => setNotice(null), 4000);

    return () => clearTimeout(noticeTimer.current);
  }, [notice]);

  useEffect(() => {
    let cancelled = false;

    async function loadData() {
      try {
        const [usersResponse, productsResponse] = await Promise.all([
          api.get("/api/users"),
          api.get("/api/products")
        ]);

        if (cancelled) {
          return;
        }

        setUsers(usersResponse.data);
        setProducts(productsResponse.data);
        setApiOnline(true);
      } catch (error) {
        if (cancelled) {
          return;
        }

        setApiOnline(false);
        setNotice({
          type: "error",
          text: `Could not connect to the API. ${getErrorMessage(error)}`
        });
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadData();

    return () => {
      cancelled = true;
    };
  }, []);

  async function createUser(payload) {
    try {
      const { data } = await api.post("/api/users", payload);
      setUsers((current) => [...current, data.user]);
      setApiOnline(true);
      setNotice({ type: "success", text: data.message });
      return true;
    } catch (error) {
      setNotice({ type: "error", text: getErrorMessage(error) });
      return false;
    }
  }

  async function deleteUser(user) {
    if (!window.confirm(`Delete ${user.name}?`)) {
      return;
    }

    try {
      const { data } = await api.delete(`/api/users/${user._id}`);
      setUsers((current) => current.filter((item) => item._id !== user._id));
      setNotice({ type: "success", text: data.message });
    } catch (error) {
      setNotice({ type: "error", text: getErrorMessage(error) });
    }
  }

  async function createProduct(payload) {
    try {
      const { data } = await api.post("/api/products", payload);
      setProducts((current) => [...current, data.product]);
      setApiOnline(true);
      setNotice({ type: "success", text: data.message });
      return true;
    } catch (error) {
      setNotice({ type: "error", text: getErrorMessage(error) });
      return false;
    }
  }

  async function updateProduct(id, payload) {
    try {
      const { data } = await api.put(`/api/products/${id}`, payload);
      setProducts((current) =>
        current.map((product) => (product._id === id ? data.product : product))
      );
      setNotice({ type: "success", text: data.message });
      return true;
    } catch (error) {
      setNotice({ type: "error", text: getErrorMessage(error) });
      return false;
    }
  }

  async function deleteProduct(product) {
    if (!window.confirm(`Delete ${product.name}?`)) {
      return;
    }

    try {
      const { data } = await api.delete(`/api/products/${product._id}`);
      setProducts((current) =>
        current.filter((item) => item._id !== product._id)
      );
      setNotice({ type: "success", text: data.message });
    } catch (error) {
      setNotice({ type: "error", text: getErrorMessage(error) });
    }
  }

  return (
    <div className="app">
      <header className="app-header">
        <div>
          <p className="eyebrow">Assignment 9</p>
          <h1>MERN Full-Stack Manager</h1>
          <p className="subtitle">
            React frontend, Express REST API, MongoDB persistence.
          </p>
        </div>

        <div className={`status ${apiOnline ? "online" : "offline"}`}>
          {apiOnline ? "API connected" : "API offline"}
        </div>
      </header>

      {notice && (
        <div className={`notice ${notice.type}`} role="status">
          {notice.text}
        </div>
      )}

      <nav className="tabs" aria-label="Collections">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`tab ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
            <span className="tab-count">
              {tab.id === "users" ? users.length : products.length}
            </span>
          </button>
        ))}
      </nav>

      <main className="layout">
        {activeTab === "users" ? (
          <>
            <UserForm onCreate={createUser} />
            <UserList users={users} loading={loading} onDelete={deleteUser} />
          </>
        ) : (
          <>
            <ProductForm onCreate={createProduct} />
            <ProductList
              products={products}
              loading={loading}
              onUpdate={updateProduct}
              onDelete={deleteProduct}
            />
          </>
        )}
      </main>

      <footer className="app-footer">
        Users: <code>/api/users</code> &middot; Products:{" "}
        <code>/api/products</code> &middot; Backend:{" "}
        <code>http://localhost:5002</code>
      </footer>
    </div>
  );
}

export default App;
