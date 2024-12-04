import React from "react";
import { useLocation } from "react-router-dom";
import "./profile.css";

function Profile() {
    const location = useLocation();
    const { firstName, lastName, role } = location.state || {
      firstName: " ",
      lastName: " ",
      role: "Unknown",
    };
  
    return (
      <div className="profile-container">
        {/* Profile Header */}
        <div className="profile-header">
          <div className="profile-avatar">
            <img src="https://via.placeholder.com/80" alt="Avatar" />
          </div>
          <div className="profile-info">
            <p><strong>{firstName} {lastName}</strong></p>
          </div>
          <button className="edit-button">Edit</button>
        </div>
        <div className="line"></div>
  
        {/* Role-specific Sections */}
        {role === "Student" ? (
          <>
            <div className="profile-section">
              <label htmlFor="major">Major:</label>
              <input
                type="text"
                id="major"
                name="major"
                placeholder="Enter your major"
                className="profile-input"
              />
            </div>
            <div className="profile-section">
              <label htmlFor="additional-info">Additional Information:</label>
              <textarea
                id="additional-info"
                name="additional-info"
                placeholder="Enter additional information"
                className="profile-textarea"
              />
            </div>
          </>
        ) : role === "Professor" ? (
          <>
            <div className="profile-section">
              <label htmlFor="courses">Courses Taught:</label>
              <input
                type="text"
                id="courses"
                name="courses"
                placeholder="Enter courses you teach"
                className="profile-input"
              />
            </div>
            <div className="profile-section">
              <label htmlFor="additional-info">Additional Information:</label>
              <textarea
                id="additional-info"
                name="additional-info"
                placeholder="Enter additional information"
                className="profile-textarea"
              />
            </div>
          </>
        ) : (
          <p>No specific role information available.</p>
        )}
      </div>
    );
  }


export default Profile;