import { KeyRound } from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark shadow-sm">
      <div className="container">

        <a
          href="/"
          className="navbar-brand d-flex align-items-center"
        >
          <KeyRound size={28} />

          <span className="ms-2 fw-bold">
            SecureGen
          </span>
        </a>

      </div>
    </nav>
  );
}

export default Navbar;