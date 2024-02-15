import React from 'react';
import { Link } from 'react-router-dom';

const TeacherSection = () => {
  return (
    <section className="section">
      <h2>Teacher</h2>
      <div>
        <Link to="/teacher/register">Register</Link>
        <Link to="/teacher/signin">Sign In</Link>
      </div>
    </section>
  );
};

export default TeacherSection;
