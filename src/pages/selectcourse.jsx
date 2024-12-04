import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./selectcourse.css";
import { getCourse } from "./../services/CourseService";

function Course() {
  return (
    <div className="app-container">
      <p>Select your course</p>
      <p>Courses:</p>
    </div>
  );
}

export default Course;