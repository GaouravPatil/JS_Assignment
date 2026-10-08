import express from 'express';
const app = express();
const PORT = 5000;

// Middleware required to parse incoming JSON payloads (req.body)
app.use(express.json());

// In-memory mock database of "User" objects
let users = [
  { id: 1, name: "Alice Smith", email: "alice@example.com" },
  { id: 2, name: "Bob Jones", email: "bob@example.com" }
];

// GET /api/users: Fetch all users
app.get('/api/users', (req, res) => {
  res.status(200).json(users);
});

// POST /api/users: Add a new user
app.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  
  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required fields." });
  }

  // Generate a new sequential ID
  const newId = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
  const newUser = { id: newId, name, email };
  
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT /api/users/:id: Update user details matching the route parameter
app.put('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const { name, email } = req.body;
  
  const userIndex = users.findIndex(u => u.id === userId);
  
  if (userIndex === -1) {
    return res.status(404).json({ error: "User not found." });
  }
  
  // Update fields if provided in req.body, otherwise retain existing data
  users[userIndex] = {
    ...users[userIndex],
    name: name || users[userIndex].name,
    email: email || users[userIndex].email
  };
  
  res.status(200).json(users[userIndex]);
});

// DELETE /api/users/:id: Remove the user matching the route parameter
app.delete('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex(u => u.id === userId);
  
  if (userIndex === -1) {
    return res.status(404).json({ error: "User not found." });
  }
  
  // Splice removes the item directly from the array
  const deletedUser = users.splice(userIndex, 1);
  res.status(200).json({ message: "User deleted successfully.", user: deletedUser[0] });
});

// Start the server
app.listen(PORT, () => {
  console.log(`REST API running on http://localhost:${PORT}`);
});