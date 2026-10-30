import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

let users = [
  { id: 1, name: "Kaustubh", email: "kaustubh@example.com" },
  { id: 2, name: "Chinmay", email: "chinmay@example.com" }
];

const findUser = (id) => users.find((user) => user.id === Number(id));

app.get("/api/users", (req, res) => {
  res.status(200).json(users);
});

app.get("/api/users/:id", (req, res) => {
  const user = findUser(req.params.id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(user);
});

app.post("/api/users", (req, res) => {
  const { name, email } = req.body || {};

  if (!name || !email) {
    return res.status(400).json({
      message: "Name and Email are required"
    });
  }

  const newUser = {
    id: users.length ? Math.max(...users.map((user) => user.id)) + 1 : 1,
    name,
    email
  };

  users.push(newUser);

  res.status(201).json({
    message: "User created successfully",
    user: newUser
  });
});

app.put("/api/users/:id", (req, res) => {
  const user = findUser(req.params.id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const { name, email } = req.body || {};

  if (!name && !email) {
    return res.status(400).json({
      message: "Provide name or email to update"
    });
  }

  if (name) user.name = name;
  if (email) user.email = email;

  res.status(200).json({
    message: "User updated successfully",
    user
  });
});

app.delete("/api/users/:id", (req, res) => {
  const index = users.findIndex((user) => user.id === Number(req.params.id));

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  const deletedUser = users.splice(index, 1)[0];

  res.status(200).json({
    message: "User deleted successfully",
    user: deletedUser
  });
});

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((error, req, res, next) => {
  console.error(error.message);
  res.status(500).json({ message: "Internal server error" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
