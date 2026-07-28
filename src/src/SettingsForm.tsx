import React from "react";

export default function SettingsForm() {
  return (
    <form>
      <label>
        Username:
        <input type="text" name="username" />
      </label>
      <br />
      <label>
        Email:
        <input type="text" name="email" />
      </label>
      <br />
      <button type="submit">Save</button>
    </form>
  );
}
