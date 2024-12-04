import React from "react";
import { useLocation } from "react-router-dom";
import "./profile.css";

function Profile() {
  const location = useLocation();
  const { firstName, lastName } = location.state || { firstName: "John", lastName: "Doe" };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-avatar">
          <img src="https://via.placeholder.com/80" alt="Avatar" />
        </div>
        <div className="profile-info">
          <p><strong>{firstName} {lastName}</strong></p>
        </div>
        <button className="edit-button">Edit</button>
      </div>
    </div>
  );
}

export default Profile;