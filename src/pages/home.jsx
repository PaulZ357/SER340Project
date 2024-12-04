import React from "react";
import { useLocation,Link } from "react-router-dom";
import "./home.css";

function Home() {
    const location = useLocation();
    const { role, firstName, lastName } = location.state || {
      role: "Unknown",
      firstName: " ",
      lastName: " ",
    };
  
    return (
      <div className="app-container">
        <div className="left-sidebar">
          <nav>
            {/* Common Home Button */}
            <a className="btn btn-secondary">Home</a>
  
            {/* Role-specific Buttons */}
            {role === "Professor" ? (
              <>
                <a className="btn btn-secondary">Feedback Log</a>
                <a className="btn btn-secondary">Add Assignment</a>
              </>
            ) : (
              <Link to="/givefeedback" className="btn btn-secondary">
                Give Feedback
              </Link>
            )}
  
            {/* Profile Button */}
            <Link
              to="/profile"
              state={{
                firstName,
                lastName,
                role,
              }}
              className="btn btn-secondary"
            >
              Profile
            </Link>
  
            {/* Log Out Button */}
            <Link to="/" className="btn btn-secondary">
              Log Out
            </Link>
          </nav>
        </div>
      </div>
    );
  }
  
  
  export default Home;