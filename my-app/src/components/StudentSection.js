import React from 'react';
import { Link } from 'react-router-dom';

const StudentSection = () => {
  return (
    <section className="section">
      <h2>Student</h2>
      <div>
        <Link to="/student/signup">Sign Up</Link>
        <Link to="/student/signin">Sign In</Link>
      </div>
    </section>
  );
};

export default StudentSection;
