import React from "react";
import "./home.css";

function Home() {
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
        <p>Welcome to the course</p>
      </div>
    </div>
  );
}

export default Home;