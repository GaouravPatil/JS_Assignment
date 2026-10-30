import { useState } from "react";

function UserForm({ onCreate }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    if (!trimmedName || !trimmedEmail) {
      return;
    }

    setSubmitting(true);
    const created = await onCreate({ name: trimmedName, email: trimmedEmail });
    setSubmitting(false);

    if (created) {
      setName("");
      setEmail("");
    }
  }

  return (
    <section className="panel">
      <h2>Add a user</h2>
      <p className="panel-hint">Send a POST request to /api/users</p>

      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="user-name">Name</label>
        <input
          id="user-name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="e.g. Aarav Sharma"
          required
        />

        <label htmlFor="user-email">Email</label>
        <input
          id="user-email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="e.g. aarav@example.com"
          required
        />

        <button className="btn primary" type="submit" disabled={submitting}>
          {submitting ? "Saving..." : "Create user"}
        </button>
      </form>
    </section>
  );
}

export default UserForm;
