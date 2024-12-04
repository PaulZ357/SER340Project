import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [showRoleSelection, setShowRoleSelection] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (!email.endsWith("@school.edu")) {
      setError("Please use a valid school email (e.g., example@school.edu).");
      return;
    }
    setError("");
    setShowRoleSelection(true);
  };

  const handleRoleSelection = (role) => {
    setIsLoggedIn(true);
    navigate("/home", { state: { role, email } });
  };

  return (
    <div className="app-container">
      <div className="header">
        <h1>Course Feedback Logger</h1>
      </div>
      {!showRoleSelection ? (
        <div className="form-container">
          <h2>Sign Up</h2>
          <input
            type="email"
            placeholder="Enter your school email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && <p className="error-text">{error}</p>}
          <button onClick={handleSignUp}>Sign Up</button>
        </div>
      ) : (
        <div className="form-container">
          <h2>Select Your Role</h2>
          <button onClick={() => handleRoleSelection("Professor")}>Professor?</button>
          <button onClick={() => handleRoleSelection("Student")}>Student?</button>
        </div>
      )}
    </div>
  );
}

export default Login;