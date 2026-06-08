function PasswordGenerator() {
  return (
    <div className="container">
      <div className="card generator-card shadow-lg">
        <div className="card-body">
          <h3>Password Generator</h3>

          <input
            className="form-control mb-3"
            placeholder="Generated Password"
          />

          <button className="btn btn-primary w-100">
            Generate Password
          </button>
        </div>
      </div>
    </div>
  )
}

export default PasswordGenerator