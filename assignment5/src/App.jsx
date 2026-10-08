import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [technology, setTechnology] = useState("");

  return (
    <div className="page">
      <div className="form-card">
        <h1>Controlled React Form</h1>
        <p className="subtitle">Enter your details below</p>

        <form>
          {/* Username */}
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* Favorite Technology */}
          <div className="form-group">
            <label htmlFor="technology">Favorite Technology</label>
            <select
              id="technology"
              value={technology}
              onChange={(e) => setTechnology(e.target.value)}
            >
              <option value="">Select a technology</option>
              <option value="React">React</option>
              <option value="Java">Java</option>
              <option value="Python">Python</option>
              <option value="JavaScript">JavaScript</option>
              <option value="Node.js">Node.js</option>
              <option value="Django">Django</option>
            </select>
          </div>
        </form>

        {/* Live Preview */}
        <div className="preview-box">
          <h2>Live Preview</h2>

          <div className="preview-content">
            <p>
              <strong>Username:</strong>{" "}
              {username || "Not entered yet"}
            </p>

            <p>
              <strong>Favorite Technology:</strong>{" "}
              {technology || "Not selected yet"}
            </p>
          </div>
        </div>

        {/* Assignment Details */}
        <div className="assignment-box">
          <p>Assignment 5 : Controlled React Form</p>
          <p>Name: Swapnaj Tolnure</p>
          <p>PRN: 1272250516</p>
        </div>
      </div>
    </div>
  );
}

export default App;
