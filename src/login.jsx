import React, { useState } from "react";
import "./login.css"; 

function App() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSignUp = () => {
    if (!email.endsWith("@school.edu")) {
      setError("Please use a valid school email (e.g., example@school.edu).");
      return;
    }

    // Automatically log in the user after entering a valid email
    setIsLoggedIn(true);
    //alert(`Welcome, ${email}!`);
    setEmail("");
    setError("");
  };

  return (
    <div className="app-container">
      <div className="header">
        <h1>Course Feedback Logger</h1>
      </div>
      {!isLoggedIn ? (
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
        <div className="welcome-container">
          <h2>You are now logged in!</h2>
          <p>Welcome</p>
        </div>
      )}
    </div>
  );
}

export default App;
