import React from "react";
import { useLocation,Link } from "react-router-dom";
import "./home.css";

function Home() {
    const location = useLocation();
    const { role, firstName, lastName } = location.state || {
        role: "Unknown",
        firstName: " ",
        lastName: " ",
        role,
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
             <Link 
             to="/givefeedback"
             className="btn btn-secondary"
             >
                GiveFeedback
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
  
            {/* Log Out Button - Last for both roles */}
           
            <a className="btn btn-secondary">Log Out</a>
          </nav>
        </div>
        <div className="content">
          <p>Welcome to the course, <strong>{role}</strong>!</p>
        </div>
      </div>
    );
  }
  
  export default Home;