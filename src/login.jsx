import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login({ setIsLoggedIn }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [showRoleSelection, setShowRoleSelection] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (!firstName.trim() || !lastName.trim()) {
      setError("Please enter both your first and last name.");
      return;
    }
    if (!email.endsWith("@quinnipiac.edu")) {
      setError("Please use a valid school email (e.g., example@quinnipiac.edu).");
      return;
    }
    setError("");
    setShowRoleSelection(true);
  };

  const handleRoleSelection = (role) => {
    setIsLoggedIn(true);
    navigate("/home", { state: { role, email, firstName, lastName } });
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
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
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