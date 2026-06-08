import { useState, useEffect } from "react";

function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);

  const [useUpper, setUseUpper] = useState(true);
  const [useLower, setUseLower] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(true);

  // Generate password
  const generatePassword = () => {
    let chars = "";

    if (useUpper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (useLower) chars += "abcdefghijklmnopqrstuvwxyz";
    if (useNumbers) chars += "0123456789";
    if (useSymbols) chars += "!@#$%^&*()_+[]{}|;:,.<>?";

    if (!chars) {
      setPassword("");
      return;
    }

    let newPassword = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      newPassword += chars[randomIndex];
    }

    setPassword(newPassword);
  };

  // Auto-generate on change (modern UX)
  useEffect(() => {
    generatePassword();
  }, [length, useUpper, useLower, useNumbers, useSymbols]);

  // Copy to clipboard
  const copyToClipboard = () => {
    if (!password) return;
    navigator.clipboard.writeText(password);
    alert("Password copied!");
  };

  return (
    <div className="container mt-5">
      {/* GLASS CARD */}
      <div className="glass p-4 mx-auto" style={{ maxWidth: "500px" }}>

        <h3 className="mb-3 text-center">
          🔐 Password Generator
        </h3>

        {/* Output */}
        <input
          className="form-control mb-3"
          value={password}
          readOnly
          placeholder="Generated password"
        />

        {/* Buttons */}
        <div className="d-flex gap-2 mb-3">
          <button className="btn btn-glow w-50" onClick={generatePassword}>
            Generate
          </button>

          <button className="btn btn-outline-light w-50" onClick={copyToClipboard}>
            Copy
          </button>
        </div>

        {/* Length */}
        <div className="mb-3">
          <label>Password Length: {length}</label>
          <input
            type="range"
            min="6"
            max="32"
            value={length}
            className="form-range"
            onChange={(e) => setLength(Number(e.target.value))}
          />
        </div>

        {/* Options */}
        <div className="form-check">
          <input
            type="checkbox"
            checked={useUpper}
            onChange={() => setUseUpper(!useUpper)}
          />
          <label className="ms-2">Include Uppercase</label>
        </div>

        <div className="form-check">
          <input
            type="checkbox"
            checked={useLower}
            onChange={() => setUseLower(!useLower)}
          />
          <label className="ms-2">Include Lowercase</label>
        </div>

        <div className="form-check">
          <input
            type="checkbox"
            checked={useNumbers}
            onChange={() => setUseNumbers(!useNumbers)}
          />
          <label className="ms-2">Include Numbers</label>
        </div>

        <div className="form-check">
          <input
            type="checkbox"
            checked={useSymbols}
            onChange={() => setUseSymbols(!useSymbols)}
          />
          <label className="ms-2">Include Symbols</label>
        </div>

      </div>
    </div>
  );
}

export default PasswordGenerator;