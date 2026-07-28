import { useState } from "react";

function SettingsForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    alert(`Saved!\nUsername: ${username}\nEmail: ${email}`);

    setUsername("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Settings Form</h2>

      <div>
        <label htmlFor="username">Username:</label>
        <br />
        <input
          id="username"
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>

      <br />

      <div>
        <label htmlFor="email">Email:</label>
        <br />
        <input
          id="email"
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <br />

      <button type="submit">Save</button>
    </form>
  );
}

export default SettingsForm;