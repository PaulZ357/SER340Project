import React, { Component } from "react";
class TableBody extends Component {
  render() {
    const {courses} = this.props; //destructuring props to get courses
    return (
      <tbody>
        {
          courses.map((course,index)=>(
            <tr key={index}>
              <td>{course.courseID}</td>
              <td>{course.courseName}</td>
              <td>{course.professor}</td>
            </tr>
          ))
        }
      </tbody>
    );
  }
}

export default TableBody;
