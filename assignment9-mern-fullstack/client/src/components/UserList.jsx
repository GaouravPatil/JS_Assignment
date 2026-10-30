function UserList({ users, loading, onDelete }) {
  return (
    <section className="panel">
      <h2>
        Registered users <span className="count">{users.length}</span>
      </h2>
      <p className="panel-hint">Loaded with Axios inside a useEffect hook</p>

      {loading ? (
        <p className="empty">Loading users...</p>
      ) : users.length === 0 ? (
        <p className="empty">No users yet. Add the first user using the form.</p>
      ) : (
        <ul className="user-list">
          {users.map((user) => (
            <li className="user-item" key={user._id}>
              <span className="avatar">
                {(user.name || "?").charAt(0).toUpperCase()}
              </span>

              <div className="user-details">
                <strong>{user.name}</strong>
                <span>{user.email}</span>
              </div>

              <button
                className="btn danger small"
                type="button"
                onClick={() => onDelete(user)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default UserList;
