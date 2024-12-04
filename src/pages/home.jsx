import React from "react";
import { useLocation } from "react-router-dom";
import "./home.css";

function Home() {
  const location = useLocation();
  const { role, email } = location.state || { role: "Unknown", email: "Unknown" };

  return (
    <div className="app-container">
      <div className="left-sidebar">
        <nav>
          <a className="btn btn-secondary">Home</a>
          <a className="btn btn-secondary">Give Feedback</a>
          <a className="btn btn-secondary">Log Out</a>
        </nav>
      </div>
      <div className="content">
        <p>Welcome to the course, <strong>{role}</strong>!</p>
        <p>Your email: {email}</p>
      </div>
    </div>
  );
}

export default Home;