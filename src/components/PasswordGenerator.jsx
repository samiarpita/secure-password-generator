import { useState } from "react";

function PasswordGenerator() {
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";

    let newPassword = "";
    const length = 12; // password length

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      newPassword += chars[randomIndex];
    }

    setPassword(newPassword);
  };

  return (
    <div className="container">
      <div className="card generator-card shadow-lg">
        <div className="card-body">
          <h3>Password Generator</h3>

          <input
            className="form-control mb-3"
            value={password}
            placeholder="Generated Password"
            readOnly
          />

          <button
            className="btn btn-primary w-100"
            onClick={generatePassword}
          >
            Generate Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;